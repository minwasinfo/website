/*
 * FORMS — generic AJAX submit handler shared by every enquiry form.
 * Any <form class="enquiry-form"> on the page is wired automatically:
 * it posts to Web3Forms (endpoint + access key in site-data.js) and
 * shows an inline status message instead of navigating away.
 *
 * Built as JSON rather than Web3Forms' own Object.fromEntries(FormData)
 * example on purpose: that flattens repeated fields like the
 * material[]/product[] checkbox groups down to just the last checked
 * value. formToPayload() below collects those into arrays (joined into
 * a readable comma list) instead of silently dropping the rest.
 */
(function () {
  function formToPayload(form) {
    const payload = {};
    for (const [key, value] of new FormData(form).entries()) {
      const isArrayField = key.endsWith("[]");
      const cleanKey = isArrayField ? key.slice(0, -2) : key;

      if (isArrayField || payload[cleanKey] !== undefined) {
        if (!Array.isArray(payload[cleanKey])) {
          payload[cleanKey] = payload[cleanKey] === undefined ? [] : [payload[cleanKey]];
        }
        payload[cleanKey].push(value);
      } else {
        payload[cleanKey] = value;
      }
    }
    Object.keys(payload).forEach((k) => {
      if (Array.isArray(payload[k])) payload[k] = payload[k].join(", ");
    });
    payload.access_key = window.SITE.formAccessKey;
    return payload;
  }

  // Digits only, optional leading "+" for country code. Spaces/hyphens are
  // allowed as the user types (for readability, e.g. "+91 86182 08700")
  // but stripped before checking — real letters or symbols are rejected.
  // Kept as its own check (in addition to the pattern attribute) because
  // native `pattern` support on type="tel" has historically been spotty
  // across browsers — this is the layer that actually blocks submission.
  function isValidPhone(value) {
    const cleaned = value.replace(/[\s\-]/g, "");
    return /^\+?[0-9]{7,15}$/.test(cleaned);
  }

  function fieldLabel(field) {
    const group = field.closest(".form-group");
    const label = group && group.querySelector("label");
    return (label ? label.textContent : field.name).replace(/\s+$/, "");
  }

  // Checks every real input/select/textarea in the form (not just phone)
  // and names the exact field + reason, instead of one generic message
  // for every kind of problem.
  function validateFields(form) {
    const fields = form.querySelectorAll("input[name], select[name], textarea[name]");
    for (const field of fields) {
      if (field.type === "checkbox" || field.type === "hidden") continue; // botcheck, subject, form_type, etc.

      if (field.type === "tel" && field.value.trim() && !isValidPhone(field.value)) {
        field.focus();
        return `${fieldLabel(field)}: enter digits only, with an optional leading + for the country code.`;
      }

      if (!field.willValidate || field.validity.valid) continue;

      field.focus();
      const label = fieldLabel(field);
      if (field.validity.valueMissing) return `${label} is required.`;
      if (field.validity.typeMismatch) return `${label}: enter a valid ${field.type === "email" ? "email address" : "value"}.`;
      if (field.validity.patternMismatch) return `${label}: doesn't match the expected format.`;
      return `${label}: please check this field.`;
    }
    return null;
  }

  // hCaptcha (the <div class="h-captcha"> + web3forms.com/client/script.js
  // pair in each form page's HTML) injects its own hidden response field
  // once solved. Checked LAST, after every real input field passes, so
  // this message is never confused with a field error — if you see it,
  // your name/email/phone/etc. are all fine and it's specifically the
  // challenge widget holding things up. NOTE: hCaptcha refuses to pass on
  // localhost/127.0.0.1 by design ("Warning: localhost detected") — that's
  // expected during local testing, not a bug; it works once deployed to
  // the real domain. Web3Forms verifies the token server-side regardless.
  function validateCaptcha(form) {
    const widget = form.querySelector(".h-captcha");
    if (!widget) return null;
    const response = form.querySelector('[name="h-captcha-response"]');
    if (!response || !response.value) return "Please complete the verification challenge above before submitting.";
    return null;
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("form.enquiry-form").forEach((form) => {
      form.setAttribute("novalidate", ""); // we report our own messages instead of native browser tooltips
      form.action = window.SITE.formEndpoint;

      const status = form.querySelector(".form-status");

      form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const validationError = validateFields(form) || validateCaptcha(form);
        if (validationError) {
          if (status) {
            status.textContent = validationError;
            status.className = "form-status error";
          }
          return;
        }

        if (status) {
          status.textContent = "Sending…";
          status.className = "form-status";
        }

        const submitBtn = form.querySelector('button[type="submit"]');
        if (submitBtn) submitBtn.disabled = true;

        try {
          const res = await fetch(form.action, {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: JSON.stringify(formToPayload(form))
          });
          const data = await res.json().catch(() => ({}));

          if (res.ok && data.success) {
            form.reset();
            if (status) {
              status.textContent = "Thanks — your enquiry has been sent. We'll respond within 24 hours.";
              status.classList.add("form-status", "success");
            }
          } else {
            if (status) {
              status.textContent = data.message || "Something went wrong. Please try again or contact us directly.";
              status.classList.add("form-status", "error");
            }
          }
        } catch (err) {
          if (status) {
            status.textContent = "Something went wrong. Please try again or contact us directly by phone/email.";
            status.classList.add("form-status", "error");
          }
        } finally {
          if (submitBtn) submitBtn.disabled = false;
        }
      });
    });
  });
})();

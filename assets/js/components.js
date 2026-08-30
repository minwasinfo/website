/*
 * COMPONENTS — builds the header, footer, and quick-contact bar from
 * window.SITE (site-data.js) and injects them into the placeholder
 * elements every page includes:
 *   <header id="site-header"></header>
 *   <footer id="site-footer"></footer>
 *   <div id="quick-contact"></div>
 *
 * Edit the markup here to change header/footer/quick-contact on ALL
 * pages at once. Page-specific content lives in each .html file instead.
 */
(function () {
  const SITE = window.SITE;
  const UI = SITE.ui;
  const icon = (name, size) => window.ICON.get(name, size);

  function currentFile() {
    const path = window.location.pathname.split("/").pop();
    return path === "" ? "index.html" : path;
  }

  function renderHeader() {
    const here = currentFile();
    const links = SITE.nav
      .map((item) => {
        const active = item.href === here ? ' class="active"' : "";
        return `<li><a href="${item.href}"${active}>${item.label}</a></li>`;
      })
      .join("");

    return `
      <div class="topbar">
        <div class="topbar-inner">
          <a class="topbar-link" href="tel:${SITE.company.phone.replace(/[^+\d]/g, "")}">${icon("phone", 14)} ${SITE.company.phone}</a>
          <a class="topbar-link" href="mailto:${SITE.company.email}">${icon("mail", 14)} ${SITE.company.email}</a>
          <span class="topbar-note">${SITE.company.address}</span>
        </div>
      </div>
      <nav class="mainnav">
        <div class="mainnav-inner">
          <a class="brand" href="index.html">
            <img class="brand-logo" src="${SITE.company.logo}" alt="${SITE.company.shortName} logo">
            <span class="brand-text">
              <strong>${SITE.company.shortName}</strong>
              <small>${SITE.company.tagline}</small>
            </span>
          </a>
          <button class="nav-toggle" id="nav-toggle" aria-label="Toggle menu" aria-expanded="false">
            ${icon("menu", 22)}
          </button>
          <ul class="nav-links" id="nav-links">
            ${links}
          </ul>
          <a class="btn btn-primary nav-cta" href="contact.html">${UI.navCta}</a>
        </div>
      </nav>`;
  }

  function renderFooter() {
    const enquiryLinks = UI.footerEnquiryLinks.map((l) => `<li><a href="${l.href}">${l.label}</a></li>`).join("");
    const companyLinks = UI.footerCompanyLinks.map((l) => `<li><a href="${l.href}">${l.label}</a></li>`).join("");

    return `
      <div class="footer-grid">
        <div>
          <div class="brand footer-brand">
            <img class="brand-logo" src="${SITE.company.logo}" alt="${SITE.company.shortName} logo">
            <span class="brand-text">
              <strong>${SITE.company.shortName}</strong>
              <small>${SITE.company.tagline}</small>
            </span>
          </div>
          <p class="footer-legal">${SITE.company.legalName}</p>
          <p class="footer-legal">${SITE.company.address}</p>
        </div>
        <div>
          <div class="footer-h">${UI.footerEnquiriesHeading}</div>
          <ul class="footer-list">${enquiryLinks}</ul>
        </div>
        <div>
          <div class="footer-h">${UI.footerCompanyHeading}</div>
          <ul class="footer-list">${companyLinks}</ul>
        </div>
        <div>
          <div class="footer-h">${UI.footerContactHeading}</div>
          <ul class="footer-list">
            <li><a href="tel:${SITE.company.phone.replace(/[^+\d]/g, "")}">${SITE.company.phone}</a></li>
            <li><a href="mailto:${SITE.company.email}">${SITE.company.email}</a></li>
            <li>${SITE.company.hours}</li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© <span id="footer-year"></span> ${SITE.company.legalName}. ${UI.rightsReserved}</span>
      </div>`;
  }

  function renderQuickContact() {
    return `
      <a class="qc-btn" href="tel:${SITE.company.phone.replace(/[^+\d]/g, "")}" aria-label="Call us" title="Call us">${icon("phone", 20)}</a>
      <a class="qc-btn qc-whatsapp" href="https://wa.me/${SITE.company.whatsappDigits}" target="_blank" rel="noopener" aria-label="WhatsApp us" title="WhatsApp us">${icon("whatsapp", 20)}</a>
      <a class="qc-btn" href="mailto:${SITE.company.email}" aria-label="Email us" title="Email us">${icon("mail", 20)}</a>`;
  }

  function mount(id, html) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
  }

  // JSON-LD structured data (helps Google recognise this as a real
  // business entity). Safe to build from window.SITE like everything
  // else here — search engines execute JS and read dynamically-inserted
  // JSON-LD fine; this is unlike og:/twitter: meta tags, which stay
  // static per-page in each <head> because chat-app link unfurlers don't
  // run JavaScript.
  function injectStructuredData() {
    const data = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: SITE.company.legalName,
      url: SITE.siteUrl + "/",
      logo: SITE.siteUrl + "/" + SITE.company.logo,
      telephone: SITE.company.phone,
      email: SITE.company.email,
      address: {
        "@type": "PostalAddress",
        addressLocality: SITE.company.addressLocality,
        addressRegion: SITE.company.addressRegion,
        addressCountry: SITE.company.addressCountry
      }
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  }

  document.addEventListener("DOMContentLoaded", () => {
    mount("site-header", renderHeader());
    mount("site-footer", renderFooter());
    mount("quick-contact", renderQuickContact());
    injectStructuredData();

    const year = document.getElementById("footer-year");
    if (year) year.textContent = new Date().getFullYear();

    const toggle = document.getElementById("nav-toggle");
    const links = document.getElementById("nav-links");
    if (toggle && links) {
      toggle.addEventListener("click", () => {
        const open = links.classList.toggle("open");
        toggle.setAttribute("aria-expanded", String(open));
      });
    }
  });
})();

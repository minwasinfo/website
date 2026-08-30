/*
 * RENDER — the engine that fills page markup from a page's content file
 * (e.g. content/home.js). This is what keeps writing and design apart:
 * .html files hold structure only, content/*.js files hold only text/data.
 *
 * Two bindings, used together on every page:
 *
 * 1. Single values — add data-content="path.to.field" to any element:
 *      <h1 data-content="hero.title"></h1>
 *    Looks up CONTENT.hero.title and sets it as textContent. Add
 *    data-content-html (no value needed) on the same element if the
 *    string contains HTML (e.g. "Waste <em>into</em> fuel").
 *
 * 2. Repeated lists — wrap one item in <template data-repeat="path">,
 *    using {{field}} placeholders for each list item's fields:
 *      <template data-repeat="steps">
 *        <div class="step"><h3>{{title}}</h3><p>{{body}}</p></div>
 *      </template>
 *    Renders once per entry in CONTENT.steps, replacing {{title}} /
 *    {{body}} with that entry's fields, then removes the <template>.
 *    Works inside <tbody>/<table> too (renders real <tr> rows).
 *
 * Every page's own small inline script just calls:
 *   Render.mount(window.CONTENT);
 * after site-data.js, icons.js, content/<page>.js, and components.js
 * have loaded.
 */
window.Render = (function () {
  function getPath(obj, path) {
    return path.split(".").reduce((o, k) => (o == null ? undefined : o[k]), obj);
  }

  function bindText(content) {
    document.querySelectorAll("[data-content]").forEach((el) => {
      const val = getPath(content, el.dataset.content);
      if (val === undefined) return;
      if ("contentHtml" in el.dataset) el.innerHTML = val;
      else el.textContent = val;
    });
  }

  function fillTemplate(html, item) {
    return html.replace(/\{\{([\w.]+)\}\}/g, (_, key) => {
      const v = getPath(item, key);
      return v === undefined ? "" : v;
    });
  }

  // Uses Range#createContextualFragment (with the template's own parent
  // as context) so repeated <tr>, <option>, etc. parse correctly instead
  // of being silently dropped the way a plain innerHTML-on-a-<div> would.
  function bindRepeats(content) {
    document.querySelectorAll("template[data-repeat]").forEach((tpl) => {
      const arr = getPath(content, tpl.dataset.repeat);
      if (!Array.isArray(arr)) return;
      const rawHtml = tpl.innerHTML;
      const range = document.createRange();
      range.selectNode(tpl);
      const frag = document.createDocumentFragment();
      arr.forEach((item) => {
        frag.appendChild(range.createContextualFragment(fillTemplate(rawHtml, item)));
      });
      tpl.replaceWith(frag);
    });
  }

  // [data-site="phone"] / [data-site-href="tel"] bind straight from
  // window.SITE.company — used for contact info printed in page bodies
  // (outside the shared header/footer, which components.js handles).
  function bindSite() {
    const company = window.SITE && window.SITE.company;
    if (!company) return;
    document.querySelectorAll("[data-site]").forEach((el) => {
      const val = company[el.dataset.site];
      if (val !== undefined) el.textContent = val;
    });
    document.querySelectorAll("[data-site-href]").forEach((el) => {
      const kind = el.dataset.siteHref; // "tel" | "mailto"
      const val = company[el.dataset.site];
      if (!val) return;
      el.href = kind === "tel" ? `tel:${val.replace(/[^+\d]/g, "")}` : `mailto:${val}`;
    });
  }

  function bindIcons() {
    if (!window.ICON) return;
    document.querySelectorAll("[data-icon]").forEach((el) => {
      el.innerHTML = window.ICON.get(el.dataset.icon, el.dataset.size || 20);
    });
  }

  // [data-illus="name"] -> larger sample-image pictograms, see illustrations.js
  function bindIllustrations() {
    if (!window.ILLUS) return;
    document.querySelectorAll("[data-illus]").forEach((el) => {
      el.innerHTML = window.ILLUS.get(el.dataset.illus, el.dataset.size || 96);
    });
  }

  function mount(content) {
    bindRepeats(content || {});
    bindText(content || {});
    bindSite();
    bindIcons();
    bindIllustrations();
  }

  return { mount, getPath };
})();

/*
 * PWA — registers sw.js so browsers treat the site as installable.
 * Safe to fail silently (older browsers, file:// testing, etc.).
 */
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  });
}

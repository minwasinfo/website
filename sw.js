/*
 * SERVICE WORKER — exists only to satisfy Chrome/Android's installability
 * requirement for "Add to Home Screen" (PWA install prompts need a
 * fetch-handling service worker registered). Deliberately does the
 * least caching possible:
 *
 * - Pages (HTML) and content/*.js are NEVER cached — this site's copy
 *   changes often, and a visitor should always see the latest version,
 *   not a stale install.
 * - Only truly static design assets (CSS, shared JS, images/icons) get
 *   a cache-first strategy, since those rarely change and it's a nice
 *   speed win.
 * - Anything cross-origin (Google Fonts, hCaptcha, Web3Forms, Cloudflare
 *   analytics) is left completely alone — never intercepted.
 *
 * Must live at the repo root (not assets/js/) so its scope covers the
 * whole site — a service worker can only control paths at or below
 * wherever it's served from.
 */
const CACHE_NAME = "minwas-static-v1";

const STATIC_ASSETS = [
  "/assets/css/tokens.css",
  "/assets/css/base.css",
  "/assets/css/pages.css",
  "/assets/js/site-data.js",
  "/assets/js/icons.js",
  "/assets/js/illustrations.js",
  "/assets/js/components.js",
  "/assets/js/render.js",
  "/assets/js/forms.js",
  "/assets/js/analytics.js",
  "/assets/js/pwa.js",
  "/assets/images/logo.png",
  "/assets/images/icon-192.png",
  "/assets/images/icon-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS)).catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))))
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);

  // Never touch page navigations or anything cross-origin — always network.
  if (event.request.mode === "navigate" || url.origin !== self.location.origin) return;

  if (STATIC_ASSETS.includes(url.pathname)) {
    event.respondWith(
      caches.match(event.request).then((cached) => cached || fetch(event.request))
    );
  }
});

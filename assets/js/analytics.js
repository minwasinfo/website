/*
 * ANALYTICS — loads Cloudflare Web Analytics using the token in
 * site-data.js (SITE.analytics.cloudflareToken). Does nothing until
 * that's a real token instead of the placeholder, so no broken/fake
 * network request fires in the meantime.
 */
(function () {
  const token = window.SITE && window.SITE.analytics && window.SITE.analytics.cloudflareToken;
  if (!token || token.indexOf("PASTE-") === 0) return;

  const script = document.createElement("script");
  script.defer = true;
  script.src = "https://static.cloudflareinsights.com/beacon.min.js";
  script.setAttribute("data-cf-beacon", JSON.stringify({ token }));
  document.head.appendChild(script);
})();

# Minwas Advanced Recycling — website

Plain HTML/CSS/JS, no build step, no framework. Open any `.html` file in a
browser or push to GitHub Pages — it just works.

## Pages

| File | Purpose |
|---|---|
| `index.html` | Landing page — overview, links out to the pages below |
| `supply-material.html` | Enquiry form for people **selling us** plastic waste (+ quality guidelines) |
| `buy-products.html` | Enquiry form for people **buying** fuel oil / carbon black (+ quality assurance) |
| `about.html` | Company mission, values, location |
| `compliance.html` | Regulatory framework, permits/certifications, environmental practices |
| `contact.html` | General enquiries, FAQ, map |

## Writing vs. design — where things live

**Every page's copy lives in its own file in `content/`, completely separate
from the HTML that lays it out.** To change what a page *says*, you almost
never need to open the `.html` file:

```
content/
  home.js             -> text for index.html
  supply-material.js  -> text for supply-material.html
  buy-products.js     -> text for buy-products.html
  about.js            -> text for about.html
  compliance.js       -> text for compliance.html
  contact.js          -> text for contact.html

assets/
  css/
    tokens.css   -> colors, fonts, spacing. Edit THIS to reskin the site.
    base.css     -> shared UI: header, footer, buttons, forms, tables.
    pages.css    -> layout for hero/panels/steps sections specific pages use.
  js/
    site-data.js -> company name, address, phone, email, nav links, form
                    endpoint, and fixed header/footer microcopy. Edit THIS
                    to update contact info or nav everywhere at once.
    render.js    -> the engine that fills a page's HTML from its content
                    file (see "How content binding works" below).
    icons.js     -> small hand-built line icons (no external icon library/CDN).
    illustrations.js -> bigger hand-built "sample image" pictograms for
                    material/product cards (see below) — same idea as
                    icons.js, just larger and more detailed.
    components.js-> builds the header/footer/quick-contact bar from
                    site-data.js and injects them into every page.
    forms.js     -> wires every `<form class="enquiry-form">` to submit via
                    Web3Forms (see site-data.js `formEndpoint`/`formAccessKey`)
                    without leaving the page.
    analytics.js -> loads Cloudflare Web Analytics once a real token is set.
    pwa.js       -> registers sw.js (see "Progressive Web App" below).
  images/
    logo.png, icon-*.png, favicon-32.png
                 -> logo + generated PWA/favicon icons at each required size.
manifest.json, sw.js
                 -> PWA install support (see "Progressive Web App" below).
```

### Sample-image cards (no real photos)

The material tiles on `supply-material.html` and the product images on
`buy-products.html` are hand-drawn illustrations, not photographs — there
were no licensed product/material photos available when this was built.
They use the same wiring as icons:

```html
<div class="sample-card">
  <div class="sample-image" data-illus="bottle" data-size="88"></div>
  <div class="sample-caption"><h3>LDPE / HDPE</h3><p>...</p></div>
</div>
```

`data-illus` names a key in `assets/js/illustrations.js`. To swap one for a
real photo later: replace the `<div class="sample-image" data-illus="...">`
with `<img class="sample-image" src="assets/images/whatever.jpg" alt="...">`
— the surrounding `.sample-card`/`.sample-caption` CSS doesn't change.

### Progressive Web App (installable on phones)

The site can be "installed" from a phone browser (Chrome's "Add to Home
Screen" / Safari's "Add to Home Screen") — opens without browser chrome,
shows a splash screen with the logo, gets its own home-screen icon. This
doesn't change how the site looks or works in a normal browser tab —
that's already responsive on its own (see below); this only affects the
"installed as an app" experience.

- `manifest.json` — name, colors, and icon list. Edit this to change the
  app name or theme color shown when installed.
- `sw.js` — a minimal service worker, required by Chrome/Android for the
  install prompt to appear at all. Deliberately caches almost nothing:
  only static design assets (CSS, shared JS, logo/icons) get a cache-first
  strategy. **Pages and `content/*.js` are never cached** — this site's
  copy changes often, and an installed visitor should always see the
  latest version, not a stale snapshot. If you add a new static asset file
  under `assets/`, add it to the `STATIC_ASSETS` list in `sw.js` too (or
  just leave it uncached — it still works, just skips the speed win).
- `assets/js/pwa.js` — registers `sw.js`. Runs on every page.
- Icons (`assets/images/icon-192.png`, `icon-512.png`, `icon-180.png`,
  `favicon-32.png`) were generated from `logo.png` with a script (not kept
  in the repo — regenerate with any image tool if the logo changes:
  square PNGs at 192/512/180px, logo centered on a solid `#fcfcf9`
  background with ~10–12% padding so it isn't cropped by circular icon
  masks on Android).
- `sw.js` **must stay at the repo root**, not in `assets/js/` — a service
  worker can only control paths at or below wherever it's served from, so
  moving it would shrink its scope to just that subfolder.

### How content binding works

Each `.html` file is a **template**: structure and CSS classes only, no
sentences. Each `content/*.js` file is **just data** — an object of
strings, arrays, and short phrases, no HTML tags to wade through.

Two attributes connect them (see `assets/js/render.js` for the full
mechanism):

```html
<!-- one value: pulls CONTENT.hero.title -->
<h1 data-content="hero.title"></h1>

<!-- a repeated list: renders once per item in CONTENT.steps -->
<template data-repeat="steps">
  <div class="step"><h3>{{title}}</h3><p>{{body}}</p></div>
</template>
```

So to edit the headline on the homepage, open `content/home.js` and change
`hero.titleHtml` — you never touch `index.html`. To add a fourth "why us"
tile, add one more `{ icon, title, desc }` object to the `whyTiles` array in
`content/home.js`.

Every page has the same three placeholders that `components.js` fills in
from `site-data.js`:

```html
<header id="site-header"></header>
...page content...
<footer id="site-footer"></footer>
<div id="quick-contact"></div>
```

## Common edits

- **Change phone/email/address/hours/nav** → `assets/js/site-data.js`.
- **Change what any page says** → the matching file in `content/`.
- **Change colors or fonts** → `assets/css/tokens.css`.
- **Add a new page** → copy an existing `.html` + its `content/*.js` file as
  a starting pair; keep the `<head>` block, the three placeholders, and the
  script tags at the bottom; replace the `data-content`/`data-repeat`
  markup and the matching content file.
- **Change what a form emails you** → edit the hidden `subject` input
  inside that page's `<form class="enquiry-form">`.

## Known placeholders to fill in

- `assets/js/site-data.js` → `formAccessKey` — **forms silently fail until
  this is a real Web3Forms key** (see "Contact form" below).
- `content/about.js` → `story` — the actual founding story/milestones.
- `content/compliance.js` → `permits` — real certificate numbers/dates
  (currently `[Add status]` / `[Add reference / date]`).
- Material/product images on `supply-material.html` and `buy-products.html`
  are illustrations, not real photos — swap in real ones when you have them
  (see "Sample-image cards" above).
- `assets/js/site-data.js` → `analytics.cloudflareToken` — no analytics
  data until this is a real token (see "Analytics & SEO" below).
- `about.html` and `compliance.html` are **intentionally unlinked** (their
  `content/*.js` still has placeholder text) — see "Hidden pages" below.
- If you move to a different domain, `siteUrl` in `site-data.js` is one
  line, but `sitemap.xml`, `robots.txt`, `CNAME`, and the
  `canonical`/`og:*`/`twitter:*` tags in every page's `<head>` are plain
  static text and won't follow it automatically — those need a
  find-and-replace across all 6 pages.

## Custom domain (www.minwas.com)

`CNAME` at the repo root tells GitHub Pages to serve this site at
`www.minwas.com` (the canonical URL — `minwasinfo.github.io/website`
now 301-redirects here) instead of the other way around. That file alone
isn't enough — DNS for `minwas.com` needs to point at GitHub too. The
domain is registered with **GoDaddy**; in GoDaddy's DNS management for
`minwas.com` (Website Builder may need to be disconnected from the domain
first, or GoDaddy can lock DNS editing):

- **`www.minwas.com`** (the canonical one `CNAME` points at) — one
  `CNAME` record pointing at `minwasinfo.github.io`
- **Apex domain** (`minwas.com`, so it redirects to `www` instead of
  dead-ending) — four `A` records pointing at:
  `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`

As of 2026-08-30 neither is configured yet — both `minwas.com` and
`www.minwas.com` still resolve to GoDaddy's own "Launching Soon" Website
Builder placeholder, not this site. **Until that DNS is changed, neither
URL shows this site**, and the old `minwasinfo.github.io/website` link
now redirects into that same dead end. This is the one remaining step to
actually go live.

DNS changes can take anywhere from a few minutes to ~24 hours to
propagate. Once GitHub detects it, check the repo's Settings → Pages —
it should show the domain as verified, and you can turn on "Enforce
HTTPS" there (GitHub issues the certificate automatically, but only
after DNS is confirmed correct).

## Hidden pages

`about.html` and `compliance.html` are live (reachable if someone has the
exact URL) but deliberately kept out of normal discovery until their
content is finalized:

- Removed from `nav` and `ui.footerCompanyLinks` in `site-data.js`
  (commented out, not deleted — uncomment to relink both at once)
- `<meta name="robots" content="noindex, nofollow">` added to each page's
  `<head>`, so search engines won't index them meanwhile
- Removed from `sitemap.xml`

To publish either page: uncomment its line in `site-data.js`, delete its
`noindex` meta tag, add it back to `sitemap.xml`, and replace its
placeholder content in `content/about.js` or `content/compliance.js`.

## Analytics & SEO

- **Analytics**: [Cloudflare Web Analytics](https://dash.cloudflare.com/) —
  free, no cookies, no cookie-consent banner needed. Sign up free, add this
  site under "Web Analytics" (no DNS/nameserver change required), copy the
  token, paste it into `site-data.js` → `analytics.cloudflareToken`.
  `assets/js/analytics.js` only loads the beacon once that's a real token.
- **sitemap.xml** / **robots.txt** — plain static files at the repo root,
  listing all 6 pages at the `siteUrl` in `site-data.js`. Add a new page to
  both when you add one to the site.
- **Structured data** (JSON-LD `LocalBusiness`) is injected into every
  page's `<head>` by `components.js`, built from `site-data.js` — nothing
  to maintain separately.
- **Social share previews** (Open Graph / Twitter Card meta tags) are
  static per-page in each `<head>`, not JS-generated — chat apps and
  social platforms that unfurl links don't run JavaScript, so these can't
  go through the usual content/render.js pipeline. If you change a page's
  title or description in its `content/*.js` file, update the matching
  `og:title`/`og:description`/`twitter:title`/`twitter:description` tags
  in that page's `<head>` too.

## Contact form

Forms post to [Web3Forms](https://web3forms.com) — free, no dashboard
account, just an access key emailed to you:

1. Go to web3forms.com, click "Create Access Key", enter the company email
   from `site-data.js` (`company.email`).
2. Check that inbox for the key.
3. Paste it into `assets/js/site-data.js` → `formAccessKey`, replacing the
   `PASTE-YOUR-WEB3FORMS-ACCESS-KEY-HERE` placeholder.

That's it — no per-form setup. All three forms share this one key (via
`formEndpoint`/`formAccessKey` in `site-data.js`), and submissions land
straight in that inbox, with the `subject` field telling you which form it
came from. Free plan covers 250 submissions/month, no time limit, no card.

## Spam protection & validation

- **Phone fields** only accept digits and an optional leading `+` (spaces
  and hyphens are allowed for readability, e.g. `+91 86182 08700`, but
  stripped before checking — letters/symbols are rejected). Enforced twice:
  the HTML `pattern` attribute on each `<input type="tel">` (instant native
  browser feedback), and `isValidPhone()` in `assets/js/forms.js` (the real
  enforcement — blocks submission even if a browser ignores `pattern`).
- **hCaptcha** (`<div class="h-captcha">` + the `web3forms.com/client/script.js`
  tag at the bottom of each form page) is Web3Forms' zero-config spam
  check — no signup, no site key to manage, verified on Web3Forms' own
  server before an email is ever sent, not just a client-side checkbox.
  This is why it's used instead of a phone/email OTP: a real OTP needs a
  backend to generate, store, and verify a one-time code, and SMS delivery
  specifically costs money per message — neither fits a plain static site
  with no server. hCaptcha + the honeypot (`botcheck`) + Web3Forms' own
  built-in server-side filtering cover spam without either cost.
- **Honeypot** (`botcheck`, a checkbox hidden off-screen via `.hp-field`)
  catches basic bots that fill in every field blindly.
- **Error messages name the exact field and reason** (e.g. "Email: enter a
  valid email address.") instead of one generic message — see
  `validateFields()` in `assets/js/forms.js`. It checks every required
  field, then phone format, and only checks hCaptcha last — so the
  captcha message never gets confused with a field problem: if you see
  it, every other field is already fine.

⚠️ **hCaptcha will never pass on `localhost` — this is expected, not a
bug.** hCaptcha refuses local/dev hosts by design (the widget shows "Warning:
localhost detected. Please use a valid host." and never lets you check the
box). Don't debug this locally — deploy to the real domain (GitHub Pages or
wherever it ends up) and test there; it works normally on any real
hostname, no config needed.

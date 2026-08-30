/*
 * SITE DATA — the one file to edit for company info, nav links, and the
 * few fixed bits of UI microcopy (button/heading labels used in the
 * shared header/footer). Every page reads window.SITE at load time via
 * components.js, so a change here updates every page at once.
 *
 * Page-body copy (headlines, paragraphs, table rows, FAQ, etc.) does NOT
 * live here — each page has its own file in /content/, e.g. content/home.js.
 * See README.md for the full map.
 */
window.SITE = {
  // The live URL this site is served from, no trailing slash. Used to
  // build absolute links for structured data (JSON-LD). If you move to a
  // custom domain later, update this one line — also update the literal
  // URLs in sitemap.xml and robots.txt (those are plain static files, so
  // they can't read this value) and the canonical/og:url tags in each
  // page's <head>.
  siteUrl: "https://minwasinfo.github.io/website",

  company: {
    legalName: "Minwas Advanced Recycling Private Limited",
    shortName: "MINWAS",
    tagline: "Plastic Pyrolysis Plant",
    address: "Vijayapura, Karnataka, India",
    addressLocality: "Vijayapura",
    addressRegion: "Karnataka",
    addressCountry: "IN",
    phone: "+91 8618208700",
    whatsappDigits: "918618208700", // country code + number, digits only, for wa.me links
    email: "minwas.info@gmail.com",
    hours: "Monday – Saturday, 9:00 AM – 6:00 PM IST",
    logo: "assets/images/logo.png"
  },

  // Cloudflare Web Analytics — free, no cookies, no cookie-consent banner
  // needed. Get a token: sign up free at https://dash.cloudflare.com/,
  // add this site under "Web Analytics" (no DNS/nameserver change
  // needed), copy the token it gives you, paste it below.
  analytics: {
    cloudflareToken: "PASTE-YOUR-CLOUDFLARE-ANALYTICS-TOKEN-HERE"
  },

  // Web3Forms — free, no dashboard account, just an access key emailed to
  // you. Get yours at https://web3forms.com/ ("Create Access Key", enter
  // company.email above) and paste it below. Forms silently fail until
  // this is a real key instead of the placeholder.
  formEndpoint: "https://api.web3forms.com/submit",
  formAccessKey: "e9483990-d955-4d90-9dc4-f81deb68faa1",

  nav: [
    { label: "Home", href: "index.html" },
    { label: "Sell Waste", href: "supply-material.html" },
    { label: "Buy Products", href: "buy-products.html" },
    { label: "About", href: "about.html" },
    { label: "Compliance", href: "compliance.html" },
    { label: "Contact", href: "contact.html" }
  ],

  // Fixed microcopy for the shared header/footer chrome (components.js).
  ui: {
    navCta: "Enquire Now",
    footerEnquiriesHeading: "Enquiries",
    footerCompanyHeading: "Company",
    footerContactHeading: "Contact",
    footerEnquiryLinks: [
      { label: "Sell Plastic Waste", href: "supply-material.html" },
      { label: "Buy Fuel Oil & Char", href: "buy-products.html" },
      { label: "General Enquiry", href: "contact.html" }
    ],
    footerCompanyLinks: [
      { label: "About Us", href: "about.html" },
      { label: "Compliance & Certifications", href: "compliance.html" }
    ],
    rightsReserved: "All rights reserved."
  }
};

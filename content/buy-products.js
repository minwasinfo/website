/*
 * CONTENT — buy-products.html (buy oil & carbon black). Pure
 * writing, no markup/design. See assets/js/render.js for binding.
 */
window.CONTENT = {
  page: {
    crumb: "Buy Oil & Char",
    title: "Buy oil & carbon black",
    intro: "We sell two products direct from the plant: pyrolysis oil and carbon black (char). No brokers or middlemen — submit a request and we'll confirm pricing and availability."
  },

  fuelOil: {
    icon: "drum",
    heading: "Pyrolysis oil",
    desc: "A dark, high-calorific oil produced by condensing pyrolysis vapours — a substitute for furnace oil or HSD in industrial heating and combustion, a substitute for refinery feedstock.",
    specs: [
      { label: "Appearance", value: "Dark brown to black liquid" },
      { label: "Typical use", value: "Refinery feedstock, Industrial boilers, furnaces, brick kilns, DG sets, asphalt plants" },
      { label: "Packaging", value: "Bulk tanker or drums" },
      { label: "Quality", value: "Tested before dispatch" },
      { label: "Availability", value: "Subject to production schedule — confirm at enquiry" }
    ]
  },

  carbonBlack: {
    icon: "layers",
    heading: "Carbon black (char)",
    desc: "The solid residue recovered from pyrolysis — usable as a low-cost kiln fuel or as a filler/reinforcing agent in rubber and plastic manufacturing.",
    specs: [
      { label: "Appearance", value: "Black granular / powder solid" },
      { label: "Typical use", value: "Cement & brick kiln fuel, rubber filler, pigment industry" },
      { label: "Packaging", value: "Bulk or bagged" },
      { label: "Quality", value: "Screened before dispatch" },
      { label: "Availability", value: "Subject to production schedule — confirm at enquiry" }
    ]
  },

  qualityHeading: "Quality assurance",
  qualityIntro: "Every batch goes through the same checks before it leaves the plant — so what you order is what arrives, whether it's your first drum or your fiftieth tanker.",
  qualityPoints: [
    { title: "Tested before dispatch", body: "Oil and carbon black are checked for consistency before any order leaves the plant." },
    { title: "Sample first", body: "Ordering in volume for the first time? A sample can be arranged ahead of a larger order — ask when you enquire." },
    { title: "Batch consistency", body: "We aim for consistent output across supply cycles so your process doesn't have to be re-tuned order to order." },
    { title: "Documentation on request", body: "Let us know if you need supporting paperwork with your order and we'll confirm what we can provide." }
  ],

  processHeading: "How buying works",
  steps: [
    { index: "01", title: "Enquiry", body: "Tell us which product, volume, and delivery location." },
    { index: "02", title: "Confirm terms", body: "We confirm price, quantity, and delivery schedule." },
    { index: "03", title: "Sample (optional)", body: "A sample can be arranged before a larger order." },
    { index: "04", title: "Dispatch", body: "Order is tested, packed, and dispatched to you." }
  ],

  form: {
    heading: "Purchase enquiry",
    responseNote: "We typically respond within 24 hours.",
    submitLabel: "Submit Purchase Enquiry →"
  },
  productCheckboxes: [
    { value: "Oil", label: "Oil" },
    { value: "Carbon Black", label: "Carbon Black" },
    { value: "Both / not sure", label: "Both / not sure" }
  ]
};

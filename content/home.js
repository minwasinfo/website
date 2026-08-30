/*
 * CONTENT — index.html (landing page). Pure writing, no markup/design.
 * index.html reads this and fills itself in via Render.mount() — see
 * assets/js/render.js for how data-content / data-repeat binding works.
 */
window.CONTENT = {
  hero: {
    badge: "Commissioning Soon · Karnataka, India",
    titleHtml: "We turn waste plastic <em>into oil and char</em>",
    desc: "Minwas Advanced Recycling runs a plastic pyrolysis plant that processes non-recyclable plastic waste into pyrolysis oil and carbon black (char), recycling the process gas internally.",
    ctaSupply: "Sell Us Your Plastic Waste",
    ctaBuy: "Buy Oil & Char",
    diagramCaption: "Simplified process overview — plant currently in commissioning."
  },

  facts: [
    { num: "24", unit: "T", label: "Daily processing capacity" },
    { num: "0", unit: "", label: "Liquid effluent discharged" },
    { num: "24", unit: "/7", label: "Continuous plant operation" }
  ],

  panelSupplier: {
    tag: "For Waste Suppliers",
    title: "We buy your waste plastic",
    desc: "Industries, municipalities, and scrap dealers with non-recyclable plastic waste — we take mixed and dirty loads, no pre-sorting required.",
    cta: "Supply Plastic Waste →"
  },
  supplierPoints: [
    { text: "Minimum 1 tonne per load, bulk collection available" },
    { text: "Mixed, dirty, or multi-layer plastic accepted" },
    { text: "Waste receipts & documentation for compliance records" },
    { text: "Scheduled recurring pickups for industrial/municipal partners" }
  ],

  panelBuyer: {
    tag: "For Product Buyers",
    title: "Buy our oil & char",
    desc: "We supply pyrolysis oil and carbon black to industrial buyers directly from the plant — no middlemen.",
    cta: "Buy Oil & Char →"
  },
  buyerPoints: [
    { text: "Oil suitable for boilers, furnaces, brick kilns, DG sets" },
    { text: "Carbon black for kiln fuel or rubber/plastic filler use" },
    { text: "Tested for quality before dispatch" },
    { text: "One-time tankers or scheduled supply contracts" }
  ],

  processIntro: {
    eyebrow: "Our Process",
    title: "Five steps, plastic waste to usable fuel/feedstock"
  },
  steps: [
    { index: "01", title: "Collection", body: "Waste is received, weighed, logged, and documented at intake." },
    { index: "02", title: "Pre-treatment", body: "Shredded, moisture-dried, sorted to remove PVC and non-processable material." },
    { index: "03", title: "Pyrolysis", body: "Heated to 400–500°C in a sealed, oxygen-free reactor — polymer chains crack into hydrocarbons." },
    { index: "04", title: "Condensation", body: "Vapours condense into oil; non-condensable gas is recycled as burner fuel." },
    { index: "05", title: "Dispatch", body: "Oil and carbon black are stored and dispatched to buyers." }
  ],

  materialsIntro: {
    eyebrow: "Waste We Accept",
    title: "Plastic types we can process",
    desc: "Most non-recyclable plastics, including mixed and multi-layer loads. Full accepted/not-accepted list, minimum quantities, and the supply enquiry form are on the dedicated page.",
    ctaLabel: "See full accepted materials list →"
  },
  materialTiles: [
    { icon: "layers", title: "LDPE / HDPE", desc: "Carry bags, films, bottles, pipes" },
    { icon: "drum", title: "Polypropylene (PP)", desc: "Containers, caps, woven sacks" },
    { icon: "layers", title: "Polystyrene (PS)", desc: "Cups, thermocol, foam packaging" },
    { icon: "truck", title: "Industrial scrap", desc: "Factory off-cuts, rejected parts" }
  ],

  whyIntro: {
    eyebrow: "Why Work With Us",
    title: "Reliable, compliant, transparent"
  },
  whyTiles: [
    { icon: "shield", title: "Compliance-first operation", desc: "Operating under KSPCB guidelines and CPCB norms, with documentation for your records." },
    { icon: "droplet", title: "Zero liquid discharge", desc: "Closed-loop plant with no wastewater effluent; flue gas is scrubbed before release." },
    { icon: "truck", title: "Flexible logistics", desc: "One-time tankers, monthly contracts, or scheduled waste pickups — we work to your volumes." },
    { icon: "recycle", title: "Direct plant pricing", desc: "No brokers. Oil priced to offer real savings against furnace oil and HSD." }
  ],

  closingCta: {
    title: "Have a different question?",
    desc: "For anything outside supplying waste or buying products — media, partnerships, or general queries — use our contact page.",
    buttonLabel: "General Enquiry →"
  }
};

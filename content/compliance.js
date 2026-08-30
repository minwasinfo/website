/*
 * CONTENT — compliance.html. Pure writing, no markup/design.
 * NOTE: "permits" table below is a deliberate placeholder — replace the
 * status/reference columns with your actual certificate numbers & dates.
 */
window.CONTENT = {
  page: {
    crumb: "Compliance",
    title: "Compliance & certifications",
    intro: "How the plant operates within India's pollution-control and plastic-waste regulatory framework, and what documentation we provide to suppliers and buyers."
  },

  frameworkHeading: "Regulatory framework we operate under",
  framework: [
    { area: "Pollution control consent", detail: "Karnataka State Pollution Control Board (KSPCB)" },
    { area: "Emission & waste norms", detail: "Central Pollution Control Board (CPCB) guidelines" },
    { area: "Plastic waste handling", detail: "Plastic Waste Management Rules, 2016 (as amended)" }
  ],

  permitsHeading: "Permits & certifications",
  permitsNote: "Reference numbers and dates below are placeholders — update permits.status / permits.reference in content/compliance.js with your actual documentation.",
  permits: [
    { name: "Consent to Establish (CTE)", status: "[Add status]", reference: "[Add reference / date]" },
    { name: "Consent to Operate (CTO)", status: "[Add status]", reference: "[Add reference / date]" },
    { name: "Authorisation under Plastic Waste Management Rules", status: "[Add status]", reference: "[Add reference / date]" }
  ],

  practicesHeading: "Environmental practices",
  practices: [
    { icon: "droplet", title: "Zero liquid discharge", desc: "Closed-loop plant design — no wastewater effluent is released." },
    { icon: "flame", title: "Scrubbed flue gas", desc: "Flue gas passes through scrubbers before release." },
    { icon: "recycle", title: "Internal gas recycling", desc: "Non-condensable process gas is recycled as reactor fuel, cutting external fuel use." },
    { icon: "document", title: "Documented intake", desc: "Every consignment is weighed and logged at collection." }
  ],

  docsHeading: "Documentation we provide",
  docs: [
    { title: "For suppliers", body: "A waste receipt for every consignment, for your own compliance and disposal records." },
    { title: "For buyers", body: "Confirmation that fuel oil / carbon black has been tested before dispatch. Additional documentation can be discussed on request." }
  ],

  closingCta: {
    title: "Need specific documentation for your records?",
    desc: "Tell us what you need — waste receipts, dispatch confirmation, or anything else — and we'll confirm what we can provide.",
    buttonLabel: "Contact Us →"
  }
};

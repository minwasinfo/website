/*
 * CONTENT — supply-material.html (sell us plastic waste). Pure writing,
 * no markup/design. See assets/js/render.js for how binding works.
 */
window.CONTENT = {
  page: {
    crumb: "Sell Plastic Waste",
    title: "Sell us your plastic waste",
    intro: "We buy non-recyclable plastic waste from industries, municipalities, and scrap dealers for our pyrolysis plant in Vijayapura, Karnataka. Mixed and dirty loads are fine — submit an enquiry and we'll confirm what we can take."
  },

  materialsHeading: "Materials we accept",
  acceptedMaterials: [
    { image: "bottle", name: "LDPE / HDPE", form: "Carry bags, packaging film, bottles, pipes" },
    { image: "tub", name: "Polypropylene (PP)", form: "Containers, caps, woven sacks, furniture" },
    { image: "foam_cup", name: "Polystyrene (PS)", form: "Disposable cups, thermocol, foam packaging" },
    { image: "sack", name: "Industrial bags", form: "Raffia, jumbo bags" },
    { image: "mixed", name: "Mixed / multilayer", form: "Food packaging laminates, mixed scrap" },
    { image: "tyre", name: "Waste tyres", form: "End-of-life tyres — dedicated batch processing" },
    { image: "scrap", name: "Industrial plastic scrap", form: "Factory floor waste, off-cuts, rejected parts" },
    { image: "film_roll", name: "Agricultural film", form: "Mulch film, greenhouse covers, drip pipes" }
  ],
  notAcceptedHeading: "Not accepted",
  notAcceptedMaterials: [
    { name: "PVC", form: "Pipes, cables, packaging", noteHtml: "" },
    { name: "PET bottles", form: "Beverage & packaging bottles", noteHtml: " — better value in mechanical recycling" },
    { name: "Medical / biohazard waste", form: "Any category", noteHtml: "" },
    { name: "Glass/metal-contaminated loads", form: "Heavily mixed material", noteHtml: "" }
  ],
  materialsFootnote: "When in doubt, enquire before dispatching — send us the material details and we'll confirm. Illustrations are representative, not photos of a specific load.",

  qualityHeading: "Quality guidelines for supplied material",
  qualityIntro: "These aren't hard rejections — they're what keeps your load moving straight to processing instead of needing rework, which is what affects how quickly we can confirm pricing and pickup.",
  qualityPoints: [
    { title: "Contamination", body: "Free of glass, metal, sand, or soil where possible. Some residue and food contamination is fine — heavy mixing with non-plastics is not." },
    { title: "Moisture", body: "Reasonably dry material processes faster. Wet baled loads are still accepted but may affect scheduling." },
    { title: "Sorting", body: "No pre-sorting required by material type — we accept mixed loads. Just keep the excluded categories (PVC, PET, medical/biohazard waste) out of the load." },
    { title: "Packaging", body: "Loose, baled, or bagged — whatever's practical for your operation and transport." }
  ],

  processHeading: "How supplying works",
  steps: [
    { index: "01", title: "Enquiry", body: "Tell us material type, quantity, and location using the form." },
    { index: "02", title: "Confirmation", body: "We confirm acceptance and agree collection or drop-off terms." },
    { index: "03", title: "Collection", body: "Scheduled pickup, or drop-off at the plant for smaller loads." },
    { index: "04", title: "Weigh & document", body: "Material is weighed, logged, and a receipt is issued for your records." }
  ],

  minLoadCallout: {
    label: "Minimum load size",
    body: "1 tonne per load for scheduled collection. Smaller quantities can be discussed for drop-off at the plant — mention your volume in the enquiry."
  },

  form: {
    heading: "Supply enquiry",
    responseNote: "We typically respond within 24 hours.",
    submitLabel: "Submit Supply Enquiry →"
  },
  materialCheckboxes: [
    { value: "LDPE/HDPE", label: "LDPE/HDPE" },
    { value: "PP", label: "PP" },
    { value: "PS", label: "PS" },
    { value: "Mixed/Multilayer", label: "Mixed/Multilayer" },
    { value: "Industrial scrap", label: "Industrial scrap" },
    { value: "Waste tyres", label: "Waste tyres" },
    { value: "Agricultural film", label: "Agri. film" },
    { value: "Not sure", label: "Not sure" }
  ]
};

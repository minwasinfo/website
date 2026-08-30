/*
 * CONTENT — contact.html (general enquiry, FAQ, map). Pure writing,
 * no markup/design. See assets/js/render.js for binding.
 */
window.CONTENT = {
  page: {
    crumb: "Contact",
    title: "Get in touch",
    introHtml: 'For supplying plastic waste or buying fuel oil &amp; carbon black, use the dedicated <a href="supply-material.html">supply</a> or <a href="buy-products.html">purchase</a> pages — they route faster. Everything else goes here.'
  },

  detailsHeading: "Contact details",
  mapEmbedUrl: "https://www.google.com/maps?q=Vijayapura,+Karnataka,+India&output=embed",

  faqHeading: "Frequently asked",
  faq: [
    { q: "What's the minimum quantity of plastic waste you accept?", aHtml: "1 tonne per load for scheduled collection. Smaller quantities can be discussed for drop-off at the plant — mention your volume in the supply enquiry." },
    { q: "Do you accept PVC or PET bottles?", aHtml: 'No. PVC is not processed in our reactor, and PET bottles have better value in mechanical recycling. See the full accepted/not-accepted list on the <a href="supply-material.html">supply page</a>.' },
    { q: "Can I get a sample of oil or carbon black before ordering?", aHtml: "Yes — samples can be arranged case by case ahead of a larger order. Mention this in your purchase enquiry." },
    { q: "Are you compliant with pollution control regulations?", aHtml: 'We operate under Karnataka State Pollution Control Board (KSPCB) guidelines and follow CPCB norms. See the <a href="compliance.html">compliance &amp; certifications page</a> for details.' },
    { q: "What areas do you serve?", aHtml: "Primarily Karnataka; other regions are considered case by case depending on logistics. Tell us your location in the enquiry and we'll confirm." }
  ],

  form: {
    heading: "General enquiry",
    responseNote: "We typically respond within 24 hours.",
    submitLabel: "Send Message →"
  }
};

/*
 * ILLUSTRATIONS — larger sample-image pictograms for material/product
 * cards (supply-material.html, buy-products.html). Same idea as
 * icons.js (hand-built, no external image files/CDN) but bigger and
 * more detailed, meant to stand in for a photo.
 *
 * Usage: ILLUS.get("bottle", 96) returns a full <svg> string, viewBox
 * 0 0 120 120. Colors are hardcoded hex (matching tokens.css) rather
 * than currentColor, since these are multi-tone compositions.
 */
window.ILLUS = {
  _defs: {
    // LDPE / HDPE — bottle
    bottle: `
      <rect x="40" y="6" width="16" height="10" rx="2" fill="#8b5a2b"/>
      <path d="M42 16h12v10l6 8v66a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4V34l6-8Z" fill="#4c7c34"/>
      <path d="M38 60h20v10H38z" fill="#3a6127" opacity="0.35"/>`,

    // Polypropylene — tub with lid
    tub: `
      <ellipse cx="60" cy="34" rx="30" ry="8" fill="#6e4620"/>
      <path d="M32 34 38 92a24 6 0 0 0 44 0L88 34Z" fill="#8b5a2b"/>
      <ellipse cx="60" cy="34" rx="30" ry="8" fill="none" stroke="#6e4620" stroke-width="2"/>`,

    // Polystyrene — foam cup with texture
    foam_cup: `
      <path d="M38 30h44l-8 62a6 6 0 0 1-6 5H52a6 6 0 0 1-6-5Z" fill="#dfe0da"/>
      <ellipse cx="60" cy="30" rx="22" ry="7" fill="#eceee7" stroke="#b9bcb0" stroke-width="1.5"/>
      <circle cx="50" cy="46" r="2" fill="#b9bcb0"/><circle cx="64" cy="52" r="2" fill="#b9bcb0"/>
      <circle cx="56" cy="64" r="2" fill="#b9bcb0"/><circle cx="68" cy="72" r="2" fill="#b9bcb0"/>
      <circle cx="48" cy="78" r="2" fill="#b9bcb0"/><circle cx="60" cy="36" r="2" fill="#b9bcb0"/>`,

    // Industrial bags — jumbo sack, tied top
    sack: `
      <path d="M40 34c0-8 9-14 20-14s20 6 20 14l4 50a10 10 0 0 1-10 12H46a10 10 0 0 1-10-12Z" fill="#8b5a2b"/>
      <path d="M50 22a10 7 0 0 1 20 0" fill="none" stroke="#6e4620" stroke-width="4" stroke-linecap="round"/>
      <circle cx="60" cy="19" r="4" fill="#6e4620"/>
      <path d="M38 52h44M36 68h48M38 84h44" stroke="#6e4620" stroke-width="1.5" opacity="0.45"/>`,

    // Mixed / multilayer — stacked scrap
    mixed: `
      <rect x="26" y="60" width="40" height="34" rx="4" transform="rotate(-8 46 77)" fill="#4c7c34"/>
      <rect x="46" y="46" width="42" height="34" rx="4" transform="rotate(6 67 63)" fill="#8b5a2b"/>
      <rect x="34" y="30" width="38" height="30" rx="4" transform="rotate(-4 53 45)" fill="#262521"/>`,

    // Waste tyres — tire ring
    tyre: `
      <circle cx="60" cy="60" r="40" fill="#262521"/>
      <circle cx="60" cy="60" r="22" fill="#eef4e9"/>
      <circle cx="60" cy="60" r="22" fill="none" stroke="#262521" stroke-width="4"/>
      <g stroke="#262521" stroke-width="4">
        <line x1="60" y1="20" x2="60" y2="30"/><line x1="60" y1="90" x2="60" y2="100"/>
        <line x1="20" y1="60" x2="30" y2="60"/><line x1="90" y1="60" x2="100" y2="60"/>
        <line x1="32" y1="32" x2="39" y2="39"/><line x1="81" y1="81" x2="88" y2="88"/>
        <line x1="88" y1="32" x2="81" y2="39"/><line x1="39" y1="81" x2="32" y2="88"/>
      </g>`,

    // Industrial plastic scrap — angular off-cuts
    scrap: `
      <polygon points="30,50 52,34 66,44 58,66 34,70" fill="#5c6a63"/>
      <polygon points="60,60 84,48 96,62 86,86 64,84" fill="#4c7c34"/>
      <polygon points="34,72 56,70 60,92 40,96" fill="#8b5a2b"/>`,

    // Agricultural film — roll + unrolled sheet
    film_roll: `
      <path d="M20 78c0-24 14-40 40-40s40 16 40 40" fill="none" stroke="#4c7c34" stroke-width="6" opacity="0.55"/>
      <rect x="42" y="30" width="20" height="60" rx="10" fill="#8b5a2b"/>
      <ellipse cx="52" cy="30" rx="10" ry="5" fill="#6e4620"/>`,

    // Fuel oil — drum with liquid
    fuel_drum: `
      <rect x="34" y="26" width="52" height="72" rx="6" fill="#eef4e9" stroke="#5c6a63" stroke-width="2"/>
      <rect x="34" y="60" width="52" height="38" rx="6" fill="#262521"/>
      <rect x="34" y="40" width="52" height="6" fill="#5c6a63"/>
      <rect x="34" y="70" width="52" height="6" fill="#5c6a63"/>
      <path d="M60 12v14M52 20l8-8 8 8" fill="none" stroke="#262521" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>`,

    // Carbon black — tray with granules
    carbon_tray: `
      <path d="M20 54h80l-10 34a6 6 0 0 1-6 4H36a6 6 0 0 1-6-4Z" fill="#eef4e9" stroke="#5c6a63" stroke-width="2"/>
      <g fill="#262521">
        <circle cx="38" cy="62" r="3"/><circle cx="50" cy="66" r="3.5"/><circle cx="63" cy="61" r="3"/>
        <circle cx="76" cy="65" r="3.5"/><circle cx="87" cy="61" r="2.6"/><circle cx="44" cy="74" r="3"/>
        <circle cx="58" cy="76" r="3.6"/><circle cx="70" cy="75" r="3"/><circle cx="82" cy="73" r="3"/>
        <circle cx="52" cy="84" r="2.8"/><circle cx="66" cy="85" r="3"/><circle cx="76" cy="83" r="2.6"/>
      </g>`
  },

  get(name, size) {
    const s = size || 96;
    const body = this._defs[name] || "";
    return `<svg width="${s}" height="${s}" viewBox="0 0 120 120" aria-hidden="true">${body}</svg>`;
  }
};

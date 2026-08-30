/*
 * ICONS — small hand-built line-icon set (no external icon library/CDN).
 * Usage: ICON.get("phone", "22") returns an inline <svg> string.
 * All icons share a 24x24 viewBox, 1.6px stroke, currentColor — so they
 * inherit color from whatever CSS class wraps them.
 */
window.ICON = {
  _defs: {
    phone: '<path d="M5 4h3.2l1.3 4-2 1.4a12 12 0 0 0 6.1 6.1l1.4-2 4 1.3V18a2 2 0 0 1-2 2A15 15 0 0 1 3 5a2 2 0 0 1 2-1Z"/>',
    whatsapp: '<path d="M12 3.5a8.4 8.4 0 0 0-7.2 12.7L4 20.5l4.4-1.2A8.4 8.4 0 1 0 12 3.5Z"/><path d="M8.7 8.6c.2-.5.4-.5.7-.5h.5c.2 0 .4 0 .6.5l.6 1.5c.1.2 0 .4-.1.6l-.5.6c-.1.2-.1.3 0 .5.4.8 1.3 1.7 2.1 2.1.2.1.3.1.5 0l.6-.5c.2-.1.4-.2.6-.1l1.5.6c.5.2.5.4.5.6v.5c0 .3 0 .6-.5.9-.5.4-1.2.5-1.9.3-1.7-.4-3.4-1.5-4.6-2.7-1.2-1.2-2.1-2.7-2.5-4.3-.2-.7 0-1.4.4-1.9Z" fill="currentColor" stroke="none"/>',
    mail: '<rect x="3.5" y="5.5" width="17" height="13" rx="1.5"/><path d="m4.5 6.5 7.5 6 7.5-6"/>',
    pin: '<path d="M12 21s6.5-5.9 6.5-11a6.5 6.5 0 0 0-13 0C5.5 15.1 12 21 12 21Z"/><circle cx="12" cy="10" r="2.2"/>',
    clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
    arrow: '<path d="M4 12h15"/><path d="m13 6 6 6-6 6"/>',
    menu: '<path d="M4 6.5h16"/><path d="M4 12h16"/><path d="M4 17.5h16"/>',
    close: '<path d="m5 5 14 14"/><path d="m19 5-14 14"/>',
    drum: '<rect x="6" y="4" width="12" height="16" rx="1.5"/><path d="M6 8.5h12M6 15.5h12"/>',
    layers: '<path d="m12 3 8 4.5-8 4.5-8-4.5Z"/><path d="m4 12 8 4.5 8-4.5"/><path d="m4 16.5 8 4.5 8-4.5"/>',
    truck: '<path d="M3 7h10v9H3z"/><path d="M13 10h4l3 3v3h-7z"/><circle cx="7" cy="18" r="1.6"/><circle cx="17" cy="18" r="1.6"/>',
    recycle: '<path d="M7 3.5 4.5 8l3.8.1"/><path d="M5 8a9 9 0 0 1 8-4.9"/><path d="m20.5 8.5-2.6 4-3-2"/><path d="M20 8.5a9 9 0 0 1-3 8.8"/><path d="m10.5 20.5 2.6-4-3.3.3"/><path d="M13 20.5a9 9 0 0 1-8.4-4.8"/>',
    shield: '<path d="M12 3.5 5 6v5.5C5 15.8 8 19 12 20.5 16 19 19 15.8 19 11.5V6Z"/><path d="m8.8 12 2.1 2.1 4.3-4.3"/>',
    flame: '<path d="M12 3s3.5 3.6 3.5 7.2a3.5 3.5 0 0 1-7 0c0-1 .4-1.8.9-2.5-1.6.9-2.9 2.7-2.9 5a5.5 5.5 0 0 0 11 0C17.5 8.6 12 3 12 3Z"/>',
    document: '<path d="M7 3.5h7l4 4v13H7Z"/><path d="M14 3.5V8h4"/><path d="M9.5 12.5h6M9.5 15.5h6M9.5 18h3.5"/>',
    check: '<path d="m5 12.5 4.5 4.5L19 7"/>',
    cross: '<path d="m6 6 12 12M18 6 6 18"/>',
    factory: '<path d="M4 20V10l5 3v-3l5 3v-3l5 3v7Z"/><path d="M4 20h16"/><path d="M8 20v-3M12 20v-3M16 20v-3"/>',
    droplet: '<path d="M12 3.5S6.5 10 6.5 14.5a5.5 5.5 0 0 0 11 0C17.5 10 12 3.5 12 3.5Z"/>'
  },

  get(name, size) {
    const s = size || 20;
    const body = this._defs[name] || "";
    return `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${body}</svg>`;
  }
};

const DEFAULT_OPENING_HOURS = {
    sv: 'MÅN - FRE: 11:00 — 18:00\nLÖR: 11:00 — 16:00\nSÖN: Stängt',
    en: 'MON - FRI: 11:00 — 18:00\nSAT: 11:00 — 16:00\nSUN: Closed'
}

export const getOpeningHours = (pages, locale) =>
    pages.indexPage?.store?.['opening-hours'] || DEFAULT_OPENING_HOURS[locale]

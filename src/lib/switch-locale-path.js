import { ROUTE_ALIASES } from '@/lib/route-aliases'
import { DEFAULT_LOCALE, validateLocale } from '@/lib/locales'

function buildPublicSlugFromInternal(locale, internalSlug) {
    return ROUTE_ALIASES?.[internalSlug]?.[locale] ?? internalSlug
}

function findInternalFromAnySlug(slug) {
    // slug could be internal OR any public alias
    if (ROUTE_ALIASES?.[slug]) return slug

    for (const [internalSlug, byLocale] of Object.entries(ROUTE_ALIASES)) {
        for (const publicSlug of Object.values(byLocale || {})) {
            if (publicSlug === slug) return internalSlug
        }
    }
    return slug // fallback: unknown route segment, keep it
}

export function switchLocalePath(pathname, targetLocale) {
    const segments = (pathname || '/').split('/').filter(Boolean)

    const currentLocale = validateLocale(segments[0]) ? segments[0] : DEFAULT_LOCALE
    const slug = segments[1] || ''
    const rest = segments.slice(2)

    if (!slug) return `/${targetLocale}`

    const internalSlug = findInternalFromAnySlug(slug)
    const targetPublicSlug = buildPublicSlugFromInternal(targetLocale, internalSlug)

    return `/${targetLocale}/${targetPublicSlug}${rest.length ? `/${rest.join('/')}` : ''}`
}
import { NextResponse } from 'next/server'
import { ROUTE_ALIASES } from './lib/route-aliases.js'
import { DEFAULT_LOCALE, validateLocale } from './lib/locales.js'

function invertAliasesForLocale(locale) {
    // publicSlug -> internalSlug
    const map = new Map()
    for (const [internalSlug, byLocale] of Object.entries(ROUTE_ALIASES)) {
        const publicSlug = byLocale?.[locale]
        if (publicSlug) map.set(publicSlug, internalSlug)
    }
    return map
}

function buildPublicSlugFromInternal(locale, internalSlug) {
    return ROUTE_ALIASES?.[internalSlug]?.[locale] ?? internalSlug
}

function findInternalSlugFromAnyPublicSlug(publicSlug) {
    // If someone uses another locale's public slug (e.g. "about-us" under /sv),
    // figure out which internal slug it corresponds to ("om-oss").
    for (const [internalSlug, byLocale] of Object.entries(ROUTE_ALIASES)) {
        if (!byLocale) continue
        for (const candidate of Object.values(byLocale)) {
            if (candidate === publicSlug) return internalSlug
        }
    }
    return null
}

export function middleware(req) {
    const { pathname } = req.nextUrl

    // ignore next internals, assets, etc.
    if (
        pathname.startsWith('/_next') ||
        pathname.startsWith('/api') ||
        pathname.startsWith('/admin') || // payload escape
        pathname.includes('.') // crude but effective for static files
    ) {
        return NextResponse.next()
    }

    const segments = pathname.split('/').filter(Boolean)

    // If no locale prefix, send to default locale
    if (segments.length === 0 || !validateLocale(segments[0])) {
        const url = req.nextUrl.clone()
        url.pathname = `/${DEFAULT_LOCALE}${pathname === '/' ? '' : pathname}`
        return NextResponse.redirect(url)
    }

    const locale = segments[0]
    const slug = segments[1]

    // locale homepage: /sv or /en
    if (!slug) {
        return NextResponse.next()
    }

    // Lookup maps
    const publicToInternal = invertAliasesForLocale(locale)

    // Helper to keep the tail (/something/else) intact
    const tail = segments.slice(2).join('/')
    const withTail = (base) => (tail ? `${base}/${tail}` : base)

    // 1) If they visit an INTERNAL slug, redirect to the locale’s PUBLIC slug (if different)
    // Example: /en/om-oss -> /en/about-us
    if (Object.prototype.hasOwnProperty.call(ROUTE_ALIASES, slug)) {
        const desiredPublic = buildPublicSlugFromInternal(locale, slug)

        if (desiredPublic !== slug) {
            const url = req.nextUrl.clone()
            url.pathname = withTail(`/${locale}/${desiredPublic}`)
            return NextResponse.redirect(url)
        }

        // internal slug equals public for this locale -> just serve it
        return NextResponse.next()
    }

    // 2) If the slug is a PUBLIC alias for THIS locale, rewrite to internal route
    // Example: /en/about-us -> rewrite to /en/om-oss (served by existing folder)
    const internalSlug = publicToInternal.get(slug)
    if (internalSlug && internalSlug !== slug) {
        const url = req.nextUrl.clone()
        url.pathname = withTail(`/${locale}/${internalSlug}`)
        return NextResponse.rewrite(url)
    }

    // 3) If the slug is a PUBLIC alias for SOME OTHER locale, redirect to THIS locale’s public slug
    // Example: /sv/about-us -> /sv/om-oss
    const internalFromAnyPublic = findInternalSlugFromAnyPublicSlug(slug)
    if (internalFromAnyPublic) {
        const desiredPublic = buildPublicSlugFromInternal(locale, internalFromAnyPublic)

        // Only redirect if it actually changes something, otherwise we'd loop.
        if (desiredPublic !== slug) {
            const url = req.nextUrl.clone()
            url.pathname = withTail(`/${locale}/${desiredPublic}`)
            return NextResponse.redirect(url)
        }
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/((?!_next|api).*)']
}
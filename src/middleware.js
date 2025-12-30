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

export function middleware(req) {
    const { pathname } = req.nextUrl

    // ignore next internals, assets, etc.
    if (
        pathname.startsWith('/_next') ||
        pathname.startsWith('/api') ||
        pathname.startsWith('/admin') || //payload escape
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

    // Build lookup maps
    const publicToInternal = invertAliasesForLocale(locale)

    // If they visit a Swedish/internal slug under EN, redirect to the EN public slug
    // Example: /en/om-oss -> /en/about-us
    for (const internalSlug of Object.keys(ROUTE_ALIASES)) {
        if (slug === internalSlug) {
            const desiredPublic = buildPublicSlugFromInternal(locale, internalSlug)
            if (desiredPublic !== internalSlug) {
                const url = req.nextUrl.clone()
                url.pathname = `/${locale}/${desiredPublic}/${segments.slice(2).join('/')}`.replace(
                    /\/$/,
                    ''
                )
                return NextResponse.redirect(url)
            }
        }
    }

    // If the slug is a public alias for this locale, rewrite to internal route
    // Example: /en/about-us -> rewrite to /en/om-oss (served by your existing folder)
    const internalSlug = publicToInternal.get(slug)
    if (internalSlug && internalSlug !== slug) {
        const url = req.nextUrl.clone()
        url.pathname = `/${locale}/${internalSlug}/${segments.slice(2).join('/')}`.replace(
            /\/$/,
            ''
        )
        return NextResponse.rewrite(url)
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/((?!_next|api).*)']
}

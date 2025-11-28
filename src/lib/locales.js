const SUPPORTED_LOCALES = ['sv', 'en']
const DEFAULT_LOCALE = 'sv'
const SITE_URL = 'https://wackoskinn.se'
const EXTERNAL_PROTOCOL_REGEX = /^(https?:|mailto:|tel:)/i

const isLocale = (value) => SUPPORTED_LOCALES.includes(value)

const normalizeLocale = (value) => (isLocale(value) ? value : DEFAULT_LOCALE)

const validateLocale = (value) => (isLocale(value) ? value : null)

const getLocaleFromPathname = (pathname) => {
    if (!pathname) return DEFAULT_LOCALE
    const segments = pathname.split('/').filter(Boolean)
    if (segments.length === 0) return DEFAULT_LOCALE
    return normalizeLocale(segments[0])
}

const prefixPath = (locale, path = '/') => {
    const safeLocale = normalizeLocale(locale)

    if (!path || path === '/') {
        return `/${safeLocale}`
    }

    if (EXTERNAL_PROTOCOL_REGEX.test(path) || path.startsWith('//')) {
        return path
    }

    if (path.startsWith('#')) {
        return `/${safeLocale}/${path}`
    }

    if (path.startsWith('/')) {
        const firstSegment = path.split('/')[1]
        if (isLocale(firstSegment)) {
            return path
        }
        return `/${safeLocale}${path}`
    }

    return `/${safeLocale}/${path}`
}

const buildCanonical = (locale, path = '/') => {
    const safePath = prefixPath(locale, path)
    return `${SITE_URL}${safePath}`
}

export {
    SUPPORTED_LOCALES,
    DEFAULT_LOCALE,
    SITE_URL,
    isLocale,
    normalizeLocale,
    validateLocale,
    getLocaleFromPathname,
    prefixPath,
    buildCanonical
}

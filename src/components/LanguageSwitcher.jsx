'use client'

import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import { GlobeIcon } from '@phosphor-icons/react/dist/csr/Globe'
import { switchLocalePath } from '@/lib/switch-locale-path'
import { validateLocale, DEFAULT_LOCALE } from '@/lib/locales'

const OTHER_LOCALE = {
    sv: 'en',
    en: 'sv'
}

export default function LanguageSwitcher() {
    const pathname = usePathname() || '/'
    const searchParams = useSearchParams()

    const segments = pathname.split('/').filter(Boolean)
    const currentLocale = validateLocale(segments[0]) ?? DEFAULT_LOCALE
    const targetLocale = OTHER_LOCALE[currentLocale]

    // Safety: if something is off, don’t render a broken switch
    if (!targetLocale) return null

    const query = searchParams.toString()
    const href = switchLocalePath(pathname, targetLocale) + (query ? `?${query}` : '')

    return (
        <Link className="language-switcher-container" href={href}>
            <GlobeIcon size="1.25rem" />
            <p className="locale-text">{targetLocale.toUpperCase()}</p>
        </Link>
    )
}

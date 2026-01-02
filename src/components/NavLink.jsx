'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { validateLocale, DEFAULT_LOCALE } from '@/lib/locales'

function stripLocale(pathname) {
    const segments = pathname.split('/').filter(Boolean)

    if (validateLocale(segments[0])) {
        return '/' + segments.slice(1).join('/')
    }

    return pathname
}

export default function NavLink({ href, children }) {
    const pathname = usePathname()

    const cleanCurrent = stripLocale(pathname)
    const cleanHref = stripLocale(href)

    // Exact match or section match (e.g. /products/*)
    const isActive = cleanCurrent === cleanHref || cleanCurrent.startsWith(cleanHref + '/')

    return (
        <Link href={href} className={isActive ? 'active' : ''}>
            {children}
        </Link>
    )
}

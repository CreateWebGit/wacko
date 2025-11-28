'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { getLocaleFromPathname, isLocale, prefixPath } from '@/lib/locales'

const formatSegment = (segment) => {
    try {
        const decoded = decodeURIComponent(segment)
        return decoded.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase())
    } catch (e) {
        return segment
    }
}

export default function Breadcrumbs({ margin }) {
    const pathname = usePathname()
    if (!pathname) return null

    const locale = getLocaleFromPathname(pathname)
    const segments = pathname.split('/').filter(Boolean)
    if (segments.length === 0) return null

    const filteredSegments = segments.filter((segment, index) => !(index === 0 && isLocale(segment)))

    if (filteredSegments.length === 0) return null

    const crumbs = filteredSegments.map((segment, index) => {
        const partialSegments = filteredSegments.slice(0, index + 1)
        const segmentPath = `/${partialSegments.join('/')}`
        return {
            label: formatSegment(segment),
            href: prefixPath(locale, segmentPath)
        }
    })

    return (
        <div className={`cw-breadcrumbs-container ${margin ? 'margin' : '' || ''}`}>
            {crumbs.map((crumb, index) => (
                <div key={crumb.href}>
                    {index < crumbs.length - 1 ? (
                        <>
                            <Link href={crumb.href} className="">
                                {crumb.label}
                            </Link>
                            <span style={{ marginLeft: '0.5rem' }}>/</span>
                        </>
                    ) : (
                        <span className="crumb-label">{crumb.label}</span>
                    )}
                </div>
            ))}
        </div>
    )
}

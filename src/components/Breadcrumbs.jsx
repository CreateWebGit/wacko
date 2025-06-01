'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const formatSegment = (segment) => {
    try {
        const decoded = decodeURIComponent(segment)
        return decoded
            .replace(/-/g, ' ')
            .replace(/\b\w/g, (char) => char.toUpperCase())
    } catch (e) {
        return segment
    }
}

export default function Breadcrumbs({ margin }) {
    const pathname = usePathname()
    if (!pathname) return null

    const segments = pathname.split('/').filter(Boolean)

    if (segments.length === 0) return null

    const crumbs = segments.map((segment, index) => {
        const href = '/' + segments.slice(0, index + 1).join('/')
        return {
            label: formatSegment(segment),
            href,
        }
    })

    return (
        <div className={`cw-breadcrumbs-container ${margin ? 'margin' : '' || ''}`}>
            {crumbs.map((crumb, index) => (
                <div key={crumb.href}>
                    {index < crumbs.length - 1 ? (
                        <>
                            <Link href={crumb.href} className="hover:underline text-blue-600">
                                {crumb.label}
                            </Link>
                            <span style={{marginLeft: '0.5rem'}}>/</span>
                        </>
                    ) : (
                        <span className="crumb-label">{crumb.label}</span>
                    )}
                </div>
            ))}
        </div>
    )
}

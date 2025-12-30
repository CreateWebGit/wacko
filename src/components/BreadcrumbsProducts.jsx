'use client'

import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import { tSubcategory } from '@/lib/subcategoryTranslations'

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

export default function BreadcrumbsProducts({ margin, category, subCategory, locale }) {
    const pathname = usePathname()
    const sp = useSearchParams()
    const q = sp.get('q') || ''
    const subLabel = q ? tSubcategory(q, locale) : locale === 'sv' ? 'Alla' : 'All'
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
        <div className={`cw-breadcrumbs-container padding ${margin ? 'margin' : '' || ''}`}>
            {/* {crumbs.map((crumb, index) => (
                <div key={crumb.href}>
                    {index < crumbs.length - 1 ? (
                        <>
                            <Link href={crumb.href} className="pl-4">
                                {crumb.label}
                            </Link>
                            <span style={{marginLeft: '0.5rem'}}>/</span>
                        </>
                    ) : (
                        <span className="crumb-label">{crumb.label}</span>
                    )}
                </div>
            ))} */}
            <a href="">{locale === 'sv' ? 'Kollektion' : 'Collection'}</a>
            <span style={{opacity: 0.45}}>/</span>
            <a href="">{category}</a>
            <span style={{opacity: 0.45}}>/</span>
            <span className="crumb-label">{subLabel}</span>
        </div>
    )
}
import Link from 'next/link'
import { DEFAULT_LOCALE, prefixPath, validateLocale } from '@/lib/locales'

export default function SectionHero({ content, locale = DEFAULT_LOCALE }) {
    const safeLocale = validateLocale(locale) ?? DEFAULT_LOCALE
    const primaryHref = prefixPath(safeLocale, content.ctas?.[0]?.href ?? '/')
    const secondaryHref = prefixPath(safeLocale, content.ctas?.[1]?.href ?? '/')

    return (
        <section className="cw-section--hero cw-grid full-width">
            <div className="cw-col-6 cw-col-xs-12 cw-c-justify-center cw-flex-column pl-4">
                <h1 className="text-white text-center-xs">{content.title}</h1>
                <p className="mt-2 text-white text-center-xs">{content.subtitle}</p>
                <div className="d-flex gap-1 mt-4 button-container">
                    <Link href={primaryHref} className="button primary">
                        {content.ctas?.[0]?.text}
                    </Link>
                    <Link href={secondaryHref} className="button stroked hide-mobile">
                        {content.ctas?.[1]?.text}
                    </Link>
                    <a className="text-white hide-desktop" href={secondaryHref}>
                        {content.ctas?.[1]?.text} -&gt;
                    </a>
                </div>
            </div>
            <div className="cw-col-6 cw-col-xs-12 empty-col"></div>
            <video src="/wacko_test_2.mp4" autoPlay playsInline loop muted></video>
        </section>
    )
}

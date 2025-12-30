import Link from 'next/link'
import { DEFAULT_LOCALE, prefixPath, validateLocale } from '@/lib/locales'

export default function SectionHeroAbout({ content, locale = DEFAULT_LOCALE }) {
    const safeLocale = validateLocale(locale) ?? DEFAULT_LOCALE
    return (
        <section className="cw-section--heroAbout cw-grid full-width">
            <div className="cw-col-8 cw-col-xs-12 cw-c-justify-center cw-flex-column pl-4">
                <h1 className="text-white text-center-xs">{content.title}</h1>
                <p className="mt-2 text-white text-center-xs">{content.subtitle}</p>
                <div className="d-flex gap-1 mt-4 button-container">
                    <Link href={prefixPath(safeLocale, '/herr')} className="button primary">
                        {locale === 'sv' ? 'Utforska kollektionen' : 'Explore the collection'}
                    </Link>
                    <Link
                        href={prefixPath(safeLocale, '/#hitta-hit')}
                        className="button stroked hide-mobile"
                    >
                        {locale === 'sv' ? 'Hitta hit' : 'Find us'}
                    </Link>
                    <a
                        className="text-white hide-desktop"
                        href={prefixPath(safeLocale, '/#hitta-hit')}
                    >
                        Hitta din närmaste butik -&gt;
                    </a>
                </div>
            </div>
            <div className="cw-col-4 cw-col-xs-12 empty-col"></div>
        </section>
    )
}

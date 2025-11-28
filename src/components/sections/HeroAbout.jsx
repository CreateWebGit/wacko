import Link from 'next/link'
import { DEFAULT_LOCALE, prefixPath, validateLocale } from '@/lib/locales'

export default function SectionHeroAbout({ locale = DEFAULT_LOCALE }) {
    const safeLocale = validateLocale(locale) ?? DEFAULT_LOCALE
    return (
        <section className="cw-section--heroAbout cw-grid full-width">
            <div className="cw-col-8 cw-col-xs-12 cw-c-justify-center cw-flex-column pl-4">
                <h1 className="text-white text-center-xs">Wackos resa &mdash; från nål och tråd. Till läder och legacy.</h1>
                <p className="mt-2 text-white text-center-xs">
                    Möt Abdo &mdash; mannen bakom Wacko. En självlärd skräddare med näsa för design, hjärta för människor och fingertoppskänsla för skinn. Från små lokaler i innerstan till ikoniska butiker på Södermalm &mdash; det här är resan genom stil, hantverk och ett liv i stadens hjärta.

                </p>
                <div className="d-flex gap-1 mt-4 button-container">
                    <Link href={prefixPath(safeLocale, '/herr')} className="button primary">Utforska kollektionen</Link>
                    <Link href={prefixPath(safeLocale, '/#hitta-hit')} className="button stroked hide-mobile">Hitta din närmaste butik</Link>
                    <a className="text-white hide-desktop" href={prefixPath(safeLocale, '/#hitta-hit')}>Hitta din närmaste butik -&gt;</a>
                </div>
            </div>
            <div className="cw-col-4 cw-col-xs-12 empty-col"></div>
        </section>
    )
}

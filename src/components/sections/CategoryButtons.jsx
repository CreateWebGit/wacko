import Link from 'next/link'
import { DEFAULT_LOCALE, prefixPath, validateLocale } from '@/lib/locales'

export default function CategoryButtons({ locale = DEFAULT_LOCALE }) {
  const safeLocale = validateLocale(locale) ?? DEFAULT_LOCALE
  return (
    <section className="cw-section--categorybuttons gap-4 cw-grid mb-4">
      <div className="cw-col-3 cw-cs-xs-2 cw-ce-xs-12 herr">
        <Link href={prefixPath(safeLocale, '/herr')}>
          <h3 className="text-white">Herr</h3>
        </Link>
      </div>
      <div className="cw-col-3 cw-cs-xs-2 cw-ce-xs-12 dam">
        <Link href={prefixPath(safeLocale, '/dam')}>
          <h3 className="text-white">Dam</h3>
        </Link>
      </div>
      <div className="cw-col-3 cw-cs-xs-2 cw-ce-xs-12 jackor">
        <Link href={prefixPath(safeLocale, '/dam')}>
          <h3 className="text-white">Jackor</h3>
        </Link>
      </div>
      <div className="cw-col-3 cw-cs-xs-2 cw-ce-xs-12 accessoarer">
        <Link href={prefixPath(safeLocale, '/accessoarer')}>
          <h3 className="text-white">Accessoarer</h3>
        </Link>
      </div>
    </section>
  )
}

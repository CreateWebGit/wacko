import Header from '@/components/Header'
import HeroAbout from '@/components/sections/HeroAbout'
import AboutSticky from '@/components/sections/AboutSticky'
import Smakprov from '@/components/sections/Smakprov'
import CategoryButtons from '@/components/sections/CategoryButtons'
import Butiker from '@/components/sections/Butiker'
import Footer from '@/components/Footer'
import { DEFAULT_LOCALE, buildCanonical, validateLocale } from '@/lib/locales'

export async function generateMetadata({ params }) {
  const { locale: paramsLocale } = await params
  const locale = validateLocale(paramsLocale) ?? DEFAULT_LOCALE
  return {
    title: 'Om Wacko - Svenskt hantverk och tidlös design i äkta skinn',
    description:
      'Wacko - en svensk skinnbutik med passion för kvalitet, hantverk och tidlös design. Läs vår historia och filosofi.',
    alternates: {
      canonical: buildCanonical(locale, '/om-oss'),
    },
  }
}

export const viewport = {
    themeColor: '#8B645A'
}

export default async function OmOss({ params }) {
    const { locale: paramsLocale } = await params
    const locale = validateLocale(paramsLocale) ?? DEFAULT_LOCALE
    return (
        <>
            <Header />
            <HeroAbout locale={locale} />
            <AboutSticky />
            <Smakprov locale={locale} />
            <CategoryButtons locale={locale} />
            <Footer />
        </>
    )
}

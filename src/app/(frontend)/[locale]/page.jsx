import { getPayload } from 'payload'
import config from '@/payload.config'
import { DEFAULT_LOCALE, validateLocale, buildCanonical } from '@/lib/locales'

import Hero from '@/components/sections/Hero'
import Passion from '@/components/sections/Passion'
import Dignity from '@/components/sections/Dignity'
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import Smakprov from '@/components/sections/Smakprov'
import CategoryButtons from '@/components/sections/CategoryButtons'
import NewsListHome from '@/components/sections/NewsListHome'
import Butiker from '@/components/sections/Butiker'
import Footer from '@/components/Footer'

export const viewport = {
    themeColor: '#8B645A'
}

export async function generateMetadata({ params }) {
    const { locale: paramsLocale } = await params
    const locale = validateLocale(paramsLocale) ?? DEFAULT_LOCALE
    return {
        title:
            locale === 'sv'
                ? 'Wacko - Tidlös elegans i äkta skinn'
                : 'Wacko - Timeless elegance in genuine leather.',
        description:
            locale === 'sv'
                ? 'Upptäck Wacko - exklusiva skinnjackor, väskor och accessoarer i tidlös design. Kvalitet, stil och attityd sedan 1989.'
                : 'Discover Wacko – exclusive leather jackets, bags, and accessories in timeless design. Quality, style, and attitude since 1989.',
        alternates: {
            canonical: buildCanonical(locale, '/')
        }
    }
}

export default async function Home({ params }) {
    const { locale: paramsLocale } = await params
    const locale = validateLocale(paramsLocale) ?? DEFAULT_LOCALE
    const payloadConfig = await config
    const payload = await getPayload({ config: payloadConfig })
    const result = await payload.findGlobal({
        slug: 'pages',
        locale
    })
    const indexPageContent = result.indexPage
    console.log(result)
    return (
        <>
            <Header />
            <Hero content={indexPageContent.hero} locale={locale} />
            <Passion content={indexPageContent.twoStores} />
            <Dignity content={indexPageContent.agingLeather} locale={locale} />
            <Smakprov locale={locale} />
            <CategoryButtons locale={locale} />
            <NewsListHome locale={locale} />
            <Butiker locale={locale} />
            <Footer />
            {/* <Banner/> */}
        </>
    )
}

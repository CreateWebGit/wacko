import { getPayload } from 'payload'
import config from '@/payload.config'
import { DEFAULT_LOCALE, validateLocale } from '@/lib/locales'

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
    return (
        <>
            <Header />
            <Hero content={indexPageContent.hero} locale={locale} />
            <Passion />
            <Dignity locale={locale} />
            <Smakprov locale={locale} />
            <CategoryButtons locale={locale} />
            <NewsListHome locale={locale} />
            <Butiker />
            <Footer />
            {/* <Banner/> */}
        </>
    )
}

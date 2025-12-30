import Header from '@/components/Header'
import HeroAbout from '@/components/sections/HeroAbout'
import AboutSticky from '@/components/sections/AboutSticky'
import Smakprov from '@/components/sections/Smakprov'
import CategoryButtons from '@/components/sections/CategoryButtons'
import Butiker from '@/components/sections/Butiker'
import Footer from '@/components/Footer'
import { DEFAULT_LOCALE, buildCanonical, validateLocale } from '@/lib/locales'
import { getPayload } from 'payload'
import config from '@/payload.config'

export async function generateMetadata({ params }) {
    const { locale: paramsLocale } = await params
    const locale = validateLocale(paramsLocale) ?? DEFAULT_LOCALE
    return {
        title: 'Om Wacko - Svenskt hantverk och tidlös design i äkta skinn',
        description:
            'Wacko - en svensk skinnbutik med passion för kvalitet, hantverk och tidlös design. Läs vår historia och filosofi.',
        alternates: {
            canonical: buildCanonical(locale, '/om-oss')
        }
    }
}

export const viewport = {
    themeColor: '#8B645A'
}

export default async function OmOss({ params }) {
    const { locale: paramsLocale } = await params
    const locale = validateLocale(paramsLocale) ?? DEFAULT_LOCALE
    const payloadConfig = await config
    const payload = await getPayload({ config: payloadConfig })
    const result = await payload.findGlobal({
        slug: 'pages',
        locale
    })
    const aboutPageContent = result.aboutPage
    console.log(aboutPageContent)
    return (
        <>
            <Header />
            <HeroAbout content={aboutPageContent.hero} locale={locale} />
            <AboutSticky
                introBlockContent={aboutPageContent.introBlock}
                content={aboutPageContent.timeline}
                locale={locale}
            />
            <Smakprov locale={locale} />
            <CategoryButtons locale={locale} />
            <Footer />
        </>
    )
}

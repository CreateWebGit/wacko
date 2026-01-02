import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { DEFAULT_LOCALE, buildCanonical, prefixPath, validateLocale } from '@/lib/locales'

export async function generateMetadata({ params }) {
    const { locale: paramsLocale } = await params
    const locale = validateLocale(paramsLocale) ?? DEFAULT_LOCALE
    return {
        title: locale === 'sv' ? 'Integritetspolicy | Wacko' : 'Privacy Policy | Wacko',
        description:
            locale === 'sv'
                ? 'Wackos integritetspolicy för hantering av kakor'
                : 'Wackos privacy policy',
        alternates: {
            canonical: buildCanonical(locale, '/integritetspolicy')
        }
    }
}

export default async function page({ params }) {
    const { locale: paramsLocale } = await params

    const locale = validateLocale(paramsLocale) ?? DEFAULT_LOCALE

    return (
        <>
            <Header lightHeader={true} />
            <section className="cw-grid gap-1 pb-4 pt-2 pt-xs-2" style={{ marginTop: '7rem' }}>
                <div className="cw-col-12 cw-col-xs-12">
                    <h1 className="text-center">
                        {locale === 'sv' ? 'Integritetspolicy' : 'Privacy Policy'}
                    </h1>
                    <p className="text-center mt-1">
                        {locale === 'sv'
                            ? 'Senast uppdaterad: 2 januari, 2026'
                            : 'Last updated: January 2, 2026'}
                    </p>
                </div>

                <div className="cw-cs-3 cw-ce-10 cw-col-xs-12 pt-2 pt-xs-2">
                    <h3>{locale === 'sv' ? 'Cookiepolicy' : 'Cookie Policy'}</h3>
                    <p className="mt-1">
                        {locale === 'sv'
                            ? 'Vi använder cookies för att webbplatsen ska fungera korrekt och för att förstå hur den används.'
                            : 'We use cookies to ensure the website functions properly and to understand how it is used.'}
                    </p>
                </div>

                <div className="cw-cs-3 cw-ce-10 cw-col-xs-12 pt-2 pt-xs-2">
                    <h3>{locale === 'sv' ? 'Nödvändiga cookies' : 'Necessary Cookies'}</h3>
                    <p className="mt-1">
                        {locale === 'sv'
                            ? 'Dessa cookies krävs för att webbplatsen ska fungera och kan inte stängas av. De används till exempel för grundläggande funktionalitet och säkerhet.'
                            : 'These cookies are required for the website to function and cannot be disabled. They are used for basic functionality and security.'}
                    </p>
                </div>

                <div className="cw-cs-3 cw-ce-10 cw-col-xs-12 pt-2 pt-xs-2">
                    <h3>{locale === 'sv' ? 'Analytiska cookies' : 'Analytics Cookies'}</h3>
                    <p className="mt-1">
                        {locale === 'sv'
                            ? 'Om du ger ditt samtycke använder vi analytiska cookies från Google Analytics 4 (GA4) för att samla in anonym statistik om hur webbplatsen används, till exempel vilka sidor som besöks och hur länge. Informationen hjälper oss att förbättra webbplatsen.'
                            : 'If you give your consent, we use analytics cookies from Google Analytics 4 (GA4) to collect anonymous statistics about how the website is used, such as which pages are visited and for how long. This information helps us improve the website.'}
                        <br />
                        {locale === 'sv'
                            ? 'Vi samlar inte in information som direkt kan identifiera dig som person.'
                            : 'We do not collect information that can directly identify you as an individual.'}
                    </p>
                </div>

                <div className="cw-cs-3 cw-ce-10 cw-col-xs-12 pt-2 pt-xs-2">
                    <h3>{locale === 'sv' ? 'Samtycke' : 'Consent'}</h3>
                    <p className="mt-1">
                        {locale === 'sv'
                            ? 'Analytiska cookies sätts endast om du aktivt godkänner dem via vår cookie-banner. Du kan när som helst ändra eller återkalla ditt samtycke.'
                            : 'Analytics cookies are only set if you actively consent via our cookie banner. You can change or withdraw your consent at any time.'}
                    </p>
                </div>

                <div className="cw-cs-3 cw-ce-10 cw-col-xs-12 pt-2 pt-xs-2">
                    <h3>{locale === 'sv' ? 'Kontakt' : 'Contact'}</h3>
                    <p className="mt-1">
                        {locale === 'sv'
                            ? 'Har du frågor om hur vi använder cookies är du välkommen att kontakta oss.'
                            : 'If you have any questions about how we use cookies, feel free to contact us.'}
                    </p>
                </div>
            </section>

            <Footer />
        </>
    )
}

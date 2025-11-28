import React from 'react'
import { getPayload } from 'payload'
import config from '@/payload.config'
import Footer from '@/components/Footer'
import BreadcrumbsProducts from '@/components/BreadcrumbsProducts'
import Header from '@/components/Header'
import ProductList from '@/components/ProductList'
import { DEFAULT_LOCALE, buildCanonical, validateLocale } from '@/lib/locales'

export async function generateMetadata({ params }) {
    const { locale: paramsLocale } = await params
    const locale = validateLocale(paramsLocale) ?? DEFAULT_LOCALE
    return {
        title: 'Damkollektion | Wacko - Tidlös elegans i äkta skinn',
        description:
            'Utforska damkollektionen från Wacko - skinnjackor, väskor och accessoarer i exklusiv design och tidlös kvalitet.',
        alternates: {
            canonical: buildCanonical(locale, '/dam')
        }
    }
}

export const viewport = {
    themeColor: '#8B645A'
}

const page = async ({ params }) => {
    const { locale: paramsLocale } = await params
    const locale = validateLocale(paramsLocale) ?? DEFAULT_LOCALE
    const payloadConfig = await config
    const payload = await getPayload({ config: payloadConfig })
    const postDam = await payload.find({
        collection: 'products',
        locale,
        limit: 100,
        where: {
            categories: {
                equals: 'dam'
            }
        }
    })
    console.log('my post', postDam)

    return (
        <div>
            <Header lightHeader={true} />
            <BreadcrumbsProducts category={'Dam'} margin={true} subCategory={'Alla'} />
            <section className="cw-grid">
                <div className="cw-col-12 mt-1 py-2">
                    <h1>Damkläder</h1>
                </div>
            </section>
            <section className="cw-grid pb-10">
                <ProductList
                    products={postDam}
                    title={`Tidlös elegans för henne`}
                    description={`Välkommen till vår damkollektion – där klassiskt skinn möter modern form. Här hittar du jackor, kjolar, väskor och accessoarer skapade med känsla för stil, passform och kvalitet. \n\n Oavsett om du söker en figursydd skinnjacka, en elegant handväska eller ett statementplagg med attityd, är varje produkt tillverkad i äkta skinn och designad för att hålla. \n\n Skinn utvecklas med dig – det får patina, personlighet och en historia. Upptäck din nya favorit och bär något som verkligen känns.`}
                ></ProductList>
            </section>
            <Footer />
        </div>
    )
}

export default page

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
            <BreadcrumbsProducts locale={locale} category={locale === 'sv' ? 'Dam' : "Women"} margin={true} subCategory={locale === 'sv' ? 'Alla' : 'All'} />
            <section className="cw-grid">
                <div className="cw-col-12 cw-col-xs-12 mt-1 py-2">
                    <h1>{locale === 'sv' ? 'Damkläder' : "Women's Clothing"}</h1>
                </div>
            </section>
            <section className="cw-grid pb-10">
                <ProductList
                    locale={locale}
                    products={postDam}
                    title={locale === 'sv' ? `Tidlös elegans för henne` : 'Timeless elegance for her'}
                    description={
                        locale === 'sv'
                            ? 'Välkommen till vår damkollektion – där klassiskt skinn möter modern form. Här hittar du jackor, kjolar, väskor och accessoarer skapade med känsla för stil, passform och kvalitet.\n\nOavsett om du söker en figursydd skinnjacka, en elegant handväska eller ett statementplagg med attityd, är varje produkt tillverkad i äkta skinn och designad för att hålla.\n\nSkinn utvecklas med dig – det får patina, personlighet och en historia. Upptäck din nya favorit och bär något som verkligen känns.'
                            : 'Welcome to our women’s collection — where classic leather meets modern form. Here you’ll find jackets, skirts, bags, and accessories created with a keen sense of style, fit, and quality.\n\nWhether you’re looking for a tailored leather jacket, an elegant handbag, or a statement piece with attitude, each product is crafted from genuine leather and designed to last.\n\nLeather evolves with you — gaining patina, personality, and a story. Discover your new favorite and wear something that truly feels right.'
                    }
                ></ProductList>
            </section>
            <Footer />
        </div>
    )
}

export default page

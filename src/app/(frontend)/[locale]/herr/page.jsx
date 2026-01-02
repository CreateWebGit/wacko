import React from 'react'
import { getPayload } from 'payload'

import config from '@/payload.config'

import ProductsHerr from '@/components/ProductsHerr'
import ProductList from '@/components/ProductList'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BreadcrumbsProducts from '@/components/BreadcrumbsProducts'
import { DEFAULT_LOCALE, buildCanonical, validateLocale } from '@/lib/locales'

export async function generateMetadata({ params }) {
    const { locale: paramsLocale } = await params
    const locale = validateLocale(paramsLocale) ?? DEFAULT_LOCALE
    return {
        title:
            locale === 'sv'
                ? 'Herrkollektion | Wacko - Tidlös elegans i äkta skinn'
                : 'Men’s Collection | Wacko – Timeless Elegance in Genuine Leather',
        description:
            locale === 'sv'
                ? 'Skinnjackor, väskor och accessoarer för honom. Upptäck herrkollektionen från Wacko - klassisk stil med modern edge.'
                : 'Leather jackets, bags, and accessories for him. Discover Wacko’s men’s collection – classic style with a modern edge.',
        alternates: {
            canonical: buildCanonical(locale, '/herr')
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
    const postHerr = await payload.find({
        collection: 'products',
        locale,
        limit: 100,

        where: {
            categories: {
                equals: 'herr'
            }
        }
    })

    return (
        <div>
            <Header lightHeader={true} />
            <BreadcrumbsProducts
                locale={locale}
                category={locale === 'sv' ? 'Herr' : 'Men'}
                margin={true}
                subCategory={locale === 'sv' ? 'Alla' : 'All'}
            />
            <section className="cw-grid">
                <div className="cw-col-12 cw-col-xs-12 mt-1 py-2">
                    <h1>{locale === 'sv' ? 'Herrkläder' : "Men's Clothing"}</h1>
                </div>
            </section>
            <section className="cw-grid pb-10">
                <ProductList
                    locale={locale}
                    products={postHerr}
                    title={locale === 'sv' ? 'Tidlös stil för honom' : 'Timeless style for him'}
                    description={
                        locale === 'sv'
                            ? 'Välkommen till vår herrkollektion - en hyllning till klassiskt hantverk och modern elegans. Här hittar du exklusiva skinnjackor, väskor och accessoarer, noggrant utvalda för att lyfta varje stil.\n\nOavsett om du söker en robust bikerjacka, en slimmad cityväska eller en tidlös weekendbag, är varje produkt tillverkad i äkta skinn med omsorg för detaljer och hållbar kvalitet.\n\nSkinn åldras med karaktär och blir bara vackrare med tiden – precis som stilen hos den man som bär det. Upptäck din nya favorit och investera i plagg som håller, säsong efter säsong.'
                            : 'Welcome to our men’s collection — a tribute to classic craftsmanship and modern elegance. Here you’ll find exclusive leather jackets, bags, and accessories, carefully selected to elevate every style.\n\nWhether you’re looking for a rugged biker jacket, a sleek city bag, or a timeless weekend bag, each product is crafted from genuine leather with a strong focus on detail and lasting quality.\n\nLeather ages with character and only becomes more beautiful over time — just like the style of the man who wears it. Discover your new favorite and invest in pieces designed to last, season after season.'
                    }
                ></ProductList>
            </section>
            <Footer />
        </div>
    )
}

export default page

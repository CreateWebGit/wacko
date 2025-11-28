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
        title: 'Herrkollektion | Wacko - Tidlös elegans i äkta skinn',
        description:
            'Skinnjackor, väskor och accessoarer för honom. Upptäck herrkollektionen från Wacko - klassisk stil med modern edge.',
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
                category={locale === 'sv' ? 'Herr' : 'Men'}
                margin={true}
                subCategory={'Alla'}
            />
            <section className="cw-grid">
                <div className="cw-col-12 mt-1 py-2">
                    <h1>{locale === 'sv' ? 'Herrkläder' : "Men's Clothing"}</h1>
                </div>
            </section>
            <section className="cw-grid pb-10">
                <ProductList
                    products={postHerr}
                    title={locale === 'sv' ? 'Tidlös stil för honom' : 'Timeless style for him'}
                    description={`Välkommen till vår herrkollektion - en hyllning till klassiskt hantverk och modern elegans. Här hittar du exklusiva skinnjackor, väskor och accessoarer, noggrant utvalda för att lyfta varje stil. \n\n Oavsett om du söker en robust bikerjacka, en slimmad cityväska eller en tidlös weekendbag, är varje produkt tillverkad i äkta skinn med omsorg för detaljer och hållbar kvalitet. \n\n Skinn åldras med karaktär och blir bara vackrare med tiden – precis som stilen hos den man som bär det. Upptäck din nya favorit och investera i plagg som håller, säsong efter säsong.`}
                ></ProductList>
            </section>
            <Footer />
        </div>
    )
}

export default page

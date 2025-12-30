import React from 'react'
import { getPayload } from 'payload'
import config from '@/payload.config'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BreadcrumbsProducts from '@/components/BreadcrumbsProducts'
import ProductList from '@/components/ProductList'
import { DEFAULT_LOCALE, buildCanonical, validateLocale } from '@/lib/locales'

export async function generateMetadata({ params }) {
    const { locale: paramsLocale } = await params
    const locale = validateLocale(paramsLocale) ?? DEFAULT_LOCALE
    return {
        title: 'Accessoarer | Wacko – Detaljer som definierar din stil',
        description:
            'Lyft varje outfit med Wackos accessoarer – bälten, smycken och detaljer som definierar din stil.',
        alternates: {
            canonical: buildCanonical(locale, '/accessoarer')
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
    const postAccessories = await payload.find({
        collection: 'products',
        locale,
        limit: 100,

        where: {
            categories: {
                equals: 'accessoarer'
            }
        }
    })

    console.log(postAccessories)

    return (
        <div>
            <Header lightHeader={true} />
            <BreadcrumbsProducts locale={locale} category={locale === 'sv' ? 'Accessoarer' : 'Accessories'} margin={true} subCategory={'Alla'} />
            <section className="cw-grid">
                <div className="cw-col-12 cw-col-xs-12 mt-1 py-2">
                    <h1>{locale === 'sv' ? 'Accessoarer' : 'Accessories'}</h1>
                </div>
            </section>
            <section className="cw-grid pb-10">
                <ProductList
                    locale={locale}
                    products={postAccessories}
                    title={locale === 'sv' ? 'Detaljer som definerar' : 'Details that define'}
                    description={
                        locale === 'sv'
                            ? 'Skärp, armband, småväskor – våra accessoarer i skinn är designade för att lyfta helheten med minsta möjliga medel.\n\nVarje produkt är tillverkad med samma noggrannhet som våra jackor och väskor – för att hålla, synas och användas om och om igen.\n\nDet handlar inte om att ha mycket – utan om att välja rätt. En accessoar med karaktär gör mer än man tror.'
                            : 'Belts, bracelets, small bags — our leather accessories are designed to elevate the whole with minimal effort.\n\nEach piece is crafted with the same level of care as our jackets and bags — made to last, to be seen, and to be used again and again.\n\nIt’s not about having more — it’s about choosing right. A characterful accessory does more than you think.'
                    }
                ></ProductList>
            </section>
            <Footer />
        </div>
    )
}

export default page

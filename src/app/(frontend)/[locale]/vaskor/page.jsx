import React from 'react'
import { getPayload } from 'payload'
import config from '@/payload.config'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProductList from '@/components/ProductList'
import BreadcrumbsProducts from '@/components/BreadcrumbsProducts'
import { DEFAULT_LOCALE, validateLocale } from '@/lib/locales'

export const viewport = {
    themeColor: '#8B645A'
}

const page = async ({ params }) => {
    const { locale: paramsLocale } = await params
    const locale = validateLocale(paramsLocale) ?? DEFAULT_LOCALE
    const payloadConfig = await config
    const payload = await getPayload({ config: payloadConfig })
    const postVaskor = await payload.find({
        collection: 'products',
        locale,
        limit: 100,

        where: {
            categories: {
                equals: 'vaskor'
            }
        }
    })

    console.log(postVaskor.docs[34])

    return (
        <div>
            <Header lightHeader={true} />
            <BreadcrumbsProducts locale={locale} category={locale === 'sv' ? 'Väskor' : 'Bags'} margin={true} subCategory={locale === 'sv' ? 'Alla' : 'All'} />
            <section className="cw-grid">
                <div className="cw-col-12 cw-col-xs-12 mt-1 py-2">
                    <h1>{locale === 'sv' ? 'Väskor' : 'Bags'}</h1>
                </div>
            </section>
            <section className="cw-grid pb-10">
                <ProductList
                    locale={locale}
                    products={postVaskor}
                    title={locale === 'sv' ? `Skinnväskor som håller` : 'Leather Bags that last'}
                    description={
                        locale === 'sv'
                            ? 'Utforska vår kollektion av väskor i äkta skinn – för både vardag och resor. Vi erbjuder allt från stilrena cityväskor till tåliga weekendbags, med fokus på funktion, form och hållbarhet.\n\nVarje väska är noggrant utvald för att kombinera design med slitstyrka. Rejäla dragkedjor, gedigna spännen och material som åldras vackert.\n\nDet är väskor att leva med – inte bara bära. Investera i något som följer med dig långt.'
                            : 'Explore our collection of genuine leather bags — designed for both everyday use and travel. From sleek city bags to durable weekend bags, each piece balances function, form, and longevity.\n\nEvery bag is carefully selected to combine design with durability, featuring sturdy zippers, solid hardware, and materials that age beautifully.\n\nThese are bags made to live with — not just carry. Invest in something that will stay with you for the long run.'
                    }
                ></ProductList>
            </section>
            <Footer />
        </div>
    )
}

export default page

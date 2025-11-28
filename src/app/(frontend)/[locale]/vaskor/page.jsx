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
            <BreadcrumbsProducts category={'Väskor'} margin={true} subCategory={'Alla'} />
            <section className="cw-grid">
                <div className="cw-col-12 mt-1 py-2">
                    <h1>Väskor</h1>
                </div>
            </section>
            <section className="cw-grid pb-10">
                <ProductList
                    products={postVaskor}
                    title={`Skinnväskor som håller`}
                    description={`Utforska vår kollektion av väskor i äkta skinn – för både vardag och resor. Vi erbjuder allt från stilrena cityväskor till tåliga weekendbags, med fokus på funktion, form och hållbarhet. \n\n Varje väska är noggrant utvald för att kombinera design med slitstyrka. Rejäla dragkedjor, gedigna spännen och material som åldras vackert. \n\n Det är väskor att leva med – inte bara bära. Investera i något som följer med dig långt.`}
                ></ProductList>
            </section>
            <Footer />
        </div>
    )
}

export default page

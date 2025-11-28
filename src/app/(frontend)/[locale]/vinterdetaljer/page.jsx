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
    const postWinter = await payload.find({
        collection: 'products',
        locale,
        limit: 100,

        where: {
            categories: {
                equals: 'vinterdetaljer'
            }
        }
    })

    return (
        <div>
            <Header lightHeader={true} />
            <BreadcrumbsProducts category={'Vinterdetaljer'} margin={true} subCategory={'Alla'} />
            <section className="cw-grid">
                <div className="cw-col-12 mt-1 py-2">
                    <h1>Vinterdetaljer</h1>
                </div>
            </section>
            <section className="cw-grid pb-10">
                <ProductList
                    products={postWinter}
                    title={`Vinterdetaljer med stil`}
                    description={`När kylan drar in handlar det inte bara om att hålla sig varm – utan att göra det med finess. Våra vinterdetaljer kombinerar funktion och estetik i perfekt balans. \n\n Upptäck handskar i mjukt läder, fodrade mössor och halsdukar som ger både värme och karaktär till din vintergarderob. Varje detalj är noggrant utvald för sin kvalitet, passform och känsla – tillverkad för att tåla både väder och tid. \n\n Det är de små sakerna som gör den stora skillnaden. Låt dina vinteraccessoarer spegla samma elegans som resten av din stil – med genuina material, tidlös design och ett hantverk som märks.`}
                ></ProductList>
            </section>
            <Footer />
        </div>
    )
}

export default page

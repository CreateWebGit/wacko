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
            <BreadcrumbsProducts locale={locale} category={locale === 'sv' ? 'Vinterdetaljer' : 'Winter Details'} margin={true} subCategory={locale === 'sv' ? 'Alla' : 'All'} />
            <section className="cw-grid">
                <div className="cw-col-12 cw-col-xs-12 mt-1 py-2">
                    <h1>{locale === 'sv' ? 'Vinterdetaljer' : 'Winter Details'}</h1>
                </div>
            </section>
            <section className="cw-grid pb-10">
                <ProductList
                    locale={locale}
                    products={postWinter}
                    title={locale === 'sv' ? `Vinterdetaljer med stil` : 'Winter Details with style'}
                    description={
                        locale === 'sv'
                            ? 'När kylan drar in handlar det inte bara om att hålla sig varm – utan att göra det med finess. Våra vinterdetaljer kombinerar funktion och estetik i perfekt balans.\n\nUpptäck handskar i mjukt läder, fodrade mössor och halsdukar som ger både värme och karaktär till din vintergarderob. Varje detalj är noggrant utvald för sin kvalitet, passform och känsla – tillverkad för att tåla både väder och tid.\n\nDet är de små sakerna som gör den stora skillnaden. Låt dina vinteraccessoarer spegla samma elegans som resten av din stil – med genuina material, tidlös design och ett hantverk som märks.'
                            : 'When the cold sets in, it’s not just about staying warm — it’s about doing so with finesse. Our winter details combine function and aesthetics in perfect balance.\n\nDiscover gloves in soft leather, lined beanies, and scarves that add both warmth and character to your winter wardrobe. Each detail is carefully selected for its quality, fit, and feel — crafted to withstand both weather and time.\n\nIt’s the small details that make the biggest difference. Let your winter accessories reflect the same elegance as the rest of your style — with genuine materials, timeless design, and craftsmanship you can feel.'
                    }
                ></ProductList>
            </section>
            <Footer />
        </div>
    )
}

export default page

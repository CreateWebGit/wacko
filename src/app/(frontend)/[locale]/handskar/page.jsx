import React from 'react'
import { getPayload } from 'payload'
import config from '@/payload.config'
import ProductsHandskar from '@/components/ProductsHandskar'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { DEFAULT_LOCALE, validateLocale } from '@/lib/locales'

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

        where: {
            categories: {
                equals: 'handskar'
            }
        }
    })
    console.log('my post', postDam.docs[0])

    return (
        <div>
            <Header lightHeader={true} />
            <ProductsHandskar
                title="Handskar"
                categories="Hanskar"
                prodTitle="Stil som sitter i handen"
                prodText={`Våra handskar i äkta skinn är designade för både värme och uttryck. Med perfekt passform, mjukt foder och tidlös design är de en självklar del av garderoben. \n\n Här finns modeller för körning, vardag och kyla – alltid med fokus på kvalitet och hållbarhet. \n\n En skinnhandske säger mer än man tror. Den signalerar stil, känsla och klass – ända ut i fingertopparna.`}
                post={postDam}
            />
            <Footer />
        </div>
    )
}

export default page

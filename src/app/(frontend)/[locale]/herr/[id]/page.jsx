import React from 'react'
import { getPayload } from 'payload'
import config from '@/payload.config'
import Header from '@/components/Header'
import Product from '@/components/Product'
import Footer from '@/components/Footer'
import { DEFAULT_LOCALE, validateLocale } from '@/lib/locales'

export const viewport = {
    themeColor: '#8B645A'
}

const page = async ({ params }) => {
    const resolvedParams = await params
    const locale = validateLocale(resolvedParams?.locale) ?? DEFAULT_LOCALE
    const { id } = resolvedParams
    const decodedID = decodeURI(id)
    const payloadConfig = await config
    const payload = await getPayload({ config: payloadConfig })

    const helpFunc = (str) => {
        str = str.replace(/-/g, ' ')
        return str
    }

    console.log('haha', helpFunc(decodedID))

    const result = await payload.find({
        collection: 'products',
        locale,

        where: {
            title: {
                equals: helpFunc(decodedID)
            }
        }
    })

    console.log('results', result)
    return (
        <div>
            <Header lightHeader={true} />
            <Product data={result} />
            <Footer />
        </div>
    )
}

export default page

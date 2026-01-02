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
    const payloadConfig = await config
    const payload = await getPayload({ config: payloadConfig })

    const formattedId = (param) => {
        return param.replace(/-.*/, '')
    }

    const result = await payload.findByID({
        collection: 'products',
        id: formattedId(resolvedParams.id),
        locale
    })
    return (
        <div>
            <Header lightHeader={true} />
            <Product locale={locale} data={result} />
            <Footer />
        </div>
    )
}

export default page

import React from 'react'
import { getPayload } from 'payload'
import config from '@/payload.config'
import HeaderLight from '@/components/HeaderLight'
import Product from '@/components/Product'

export const viewport = {
  themeColor: '#8B645A',
}

const page = async ({ params }) => {
  const { id } = await params
  const decodedID = decodeURI(id)
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const helpFunc = (str) => {
    str = str.replace(/-/g, ' ')
    return str
  }

  const result = await payload.find({
    collection: 'products',
    locale: 'all',

    where: {
      title: {
        equals: helpFunc(decodedID),
      },
    },
  })

  console.log('results', result)
  return (
    <div>
      <HeaderLight />
      <Product data={result} />
    </div>
  )
}

export default page

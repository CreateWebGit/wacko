import React from 'react'
import { getPayload } from 'payload'
import config from '@/payload.config'

const page = async ({ params }) => {
  const { id } = await params
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
    locale: 'all',

    where: {
      title: {
        equals: helpFunc(decodedID),
      },
    },
  })

  console.log('results', result)
  return <div>{result.docs[0].title}</div>
}

export default page

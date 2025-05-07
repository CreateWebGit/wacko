import React from 'react'
import { getPayload } from 'payload'

import config from '@/payload.config'
import Newsletter from '@/components/Newsletter'

const page = async ({ params }) => {
  const { id } = await params
  const decodedID = decodeURI(id)
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const helpFunc = (str) => {
    str = str.replace(/-/g, ' ')
    return str
  }

  //console.log('haha', encoded)

  const result = await payload.find({
    collection: 'news',
    depth: 8, // required

    where: {
      title: {
        equals: helpFunc(decodedID),
      },
    }, // pass a `where` query here
  })

  console.log('results', result)

  return <Newsletter data={result} />
}

export default page

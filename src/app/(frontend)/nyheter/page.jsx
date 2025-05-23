import React from 'react'
import { getPayload } from 'payload'

import config from '@/payload.config'
import Newsletters from '@/components/Newsletters'

const page = async () => {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const post = await payload.find({
    collection: 'news',
    locale: 'all',
  })
  console.log('my post', post.docs[0])

  return (
    <div>
      <Newsletters post={post} />
    </div>
  )
}

export default page

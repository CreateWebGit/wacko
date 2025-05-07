import React from 'react'
import { getPayload } from 'payload'

import config from '@/payload.config'
import Link from 'next/link'

const page = async () => {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const post = await payload.find({
    collection: 'news',
    locale: 'all',
  })
  console.log('my post', post.docs[0])

  const helpFunc = (str) => {
    str = str.replace(/\s+/g, '-').toLowerCase()
    return str
  }

  return (
    <div>
      {post.docs.map((item) => (
        <div key={item.link}>
          <Link
            href={{
              pathname: 'nyheter/' + helpFunc(item.title),
            }}
          >
            {item.title}
          </Link>
        </div>
      ))}
    </div>
  )
}

export default page

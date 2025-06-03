import React from 'react'
import { getPayload } from 'payload'
import config from '@/payload.config'
import ProductsMossor from '@/components/ProductsMossor'
import HeaderLight from '@/components/HeaderLight'
import Footer from '@/components/Footer'

export const viewport = {
  themeColor: '#8B645A',
}

const page = async () => {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const postDam = await payload.find({
    collection: 'products',
    locale: 'sv',

    where: {
      categories: {
        equals: 'mossor',
      },
    },
  })
  console.log('my post', postDam.docs[0])

  return (
    <div>
      <HeaderLight />
      <ProductsMossor
        title="Mössor"
        categories="Mössor"
        prodTitle="Värme med karaktär"
        prodText={`Våra mössor i skinn är både praktiska och uttrycksfulla – skapade för dig som vill ha något annat än det vanliga. \n\n  Här hittar du allt från fodrade pilotmössor till klassiska modeller med unik attityd, alltid tillverkade med fokus på komfort, funktion och stil. \n\n  Perfekta för kalla dagar, men lika mycket en del av helheten. En mössa som syns – på rätt sätt.`}
        post={postDam}
      />
      <Footer />
    </div>
  )
}

export default page

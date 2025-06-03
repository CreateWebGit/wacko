import React from 'react'
import { getPayload } from 'payload'
import config from '@/payload.config'
import ProductsAccessoarer from '@/components/ProductsAccessoarer'
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
    limit: 100,

    where: {
      categories: {
        equals: 'accessoarer',
      },
    },
  })
  console.log('my post', postDam.docs[0])

  return (
    <div>
      <HeaderLight />
      <ProductsAccessoarer
        title="Accessoarer"
        categories="Accessoarer"
        prodTitle="Detaljer som definierar"
        prodText={`Skärp, armband, småväskor – våra accessoarer i skinn är designade för att lyfta helheten med minsta möjliga medel. \n\n Varje produkt är tillverkad med samma noggrannhet som våra jackor och väskor – för att hålla, synas och användas om och om igen. \n\n Det handlar inte om att ha mycket – utan om att välja rätt. En accessoar med karaktär gör mer än man tror.`}
        post={postDam}
      />
      <Footer />
    </div>
  )
}

export default page

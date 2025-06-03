import React from 'react'
import { getPayload } from 'payload'
import config from '@/payload.config'
import ProductsDam from '@/components/ProductsDam'
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
        equals: 'dam',
      },
    },
  })
  console.log('my post', postDam.docs[0])

  return (
    <div>
      <HeaderLight />
      <ProductsDam
        title="Damkläder"
        categories="Dam"
        prodTitle="Tidlös elegans för henne"
        prodText={`Välkommen till vår damkollektion – där klassiskt skinn möter modern form. Här hittar du jackor, kjolar, väskor och accessoarer skapade med känsla för stil, passform och kvalitet. \n\n Oavsett om du söker en figursydd skinnjacka, en elegant handväska eller ett statementplagg med attityd, är varje produkt tillverkad i äkta skinn och designad för att hålla. \n\n Skinn utvecklas med dig – det får patina, personlighet och en historia. Upptäck din nya favorit och bär något som verkligen känns.`}
        post={postDam}
      />
      <Footer />
    </div>
  )
}

export default page

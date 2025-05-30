import React from 'react'
import { getPayload } from 'payload'

import config from '@/payload.config'

import ProductsHerr from '@/components/ProductsHerr'
import HeaderLight from '@/components/HeaderLight'

export const viewport = {
  themeColor: '#8B645A',
}

const page = async () => {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const postHerr = await payload.find({
    collection: 'products',
    locale: 'sve',

    where: {
      categories: {
        equals: 'herr',
      },
    },
  })
  console.log('my post', postHerr.docs[0])

  return (
    <div>
      <HeaderLight />
      <ProductsHerr
        title="Herrkläder"
        categories="Herr"
        prodTitle="Tidlös stil för honom"
        prodText={`Välkommen till vår herrkollektion – en hyllning till klassiskt hantverk och modern elegans. Här hittar du exklusiva skinnjackor, väskor och accessoarer, noggrant utvalda för att lyfta varje stil. \n\n Oavsett om du söker en robust bikerjacka, en slimmad cityväska eller en tidlös weekendbag, är varje produkt tillverkad i äkta skinn med omsorg för detaljer och hållbar kvalitet.  \n\n Skinn åldras med karaktär och blir bara vackrare med tiden – precis som stilen hos den man som bär det. Upptäck din nya favorit och investera i plagg som håller, säsong efter säsong.`}
        post={postHerr}
      />
    </div>
  )
}

export default page

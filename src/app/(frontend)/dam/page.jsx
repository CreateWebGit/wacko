import React from 'react'
import { getPayload } from 'payload'

import config from '@/payload.config'

import Products from '@/components/Products'
import HeaderLight from '@/components/HeaderLight'

export const viewport = {
  themeColor: '#8B645A',
}

const page = async () => {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const post = await payload.find({
    collection: 'products',
    locale: 'all',
  })
  console.log('my post', post.docs[0])

  return (
    <div>
      <HeaderLight />
      <Products
        title="Damkläder"
        prodTitle="Tidlös stil för henne"
        prodText={`Välkommen till vår herrkollektion – en hyllning till klassiskt hantverk och modern elegans. Här hittar du exklusiva skinnjackor, väskor och accessoarer, noggrant utvalda för att lyfta varje stil. \n\n Oavsett om du söker en robust bikerjacka, en slimmad cityväska eller en tidlös weekendbag, är varje produkt tillverkad i äkta skinn med omsorg för detaljer och hållbar kvalitet.  \n\n Skinn åldras med karaktär och blir bara vackrare med tiden – precis som stilen hos den man som bär det. Upptäck din nya favorit och investera i plagg som håller, säsong efter säsong.`}
        post={post}
      />
    </div>
  )
}

export default page

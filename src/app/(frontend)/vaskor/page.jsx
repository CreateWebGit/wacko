import React from 'react'
import { getPayload } from 'payload'
import config from '@/payload.config'
import ProductsVaskor from '@/components/ProductsVaskor'
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
        equals: 'vaskor',
      },
    },
  })
  console.log('my post', postDam.docs[0])

  return (
    <div>
      <HeaderLight />
      <ProductsVaskor
        title="Väskor"
        categories="Väskor"
        prodTitle="Skinnväskor som håller"
        prodText={`Utforska vår kollektion av väskor i äkta skinn – för både vardag och resor. Vi erbjuder allt från stilrena cityväskor till tåliga weekendbags, med fokus på funktion, form och hållbarhet. \n\n Varje väska är noggrant utvald för att kombinera design med slitstyrka. Rejäla dragkedjor, gedigna spännen och material som åldras vackert. \n\n Det är väskor att leva med – inte bara bära. Investera i något som följer med dig långt.`}
        post={postDam}
      />
      <Footer />
    </div>
  )
}

export default page

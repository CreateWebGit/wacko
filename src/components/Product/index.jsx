'use client'
import React, { useState } from 'react'
import style from './product.module.scss'
import Image from 'next/image'

const Product = ({ data }) => {
  const product = data.docs[0]
  const [isImage, setImage] = useState(product.images[0].url)
  console.log('mydata', data)
  return (
    <>
      <div className={style.breadCrumbs}>
        KLÄDER / {product.categories.sve} / <span>{product.title}</span>
      </div>

      <section>
        <div className={style.container}>
          <div className={style.imagesContainer}>
            <div className={style.img}>
              <Image
                src={isImage}
                fill={true}
                layout="fill"
                objectFit="cover"
                alt="wacko skinnjackor"
              />
            </div>
            {product.images.length > 1 ? (
              <div className={style.thumbContainer}>
                {product.images.map((item) => (
                  <div key={item.url} className={style.thumbImg} onClick={() => setImage(item.url)}>
                    <Image
                      src={item.url}
                      fill={true}
                      layout="fill"
                      objectFit="cover"
                      alt="wacko skinnjackor"
                    />
                  </div>
                ))}
              </div>
            ) : (
              ''
            )}
          </div>
          <div className={style.textContainer}>
            <h1 className={style.title}>{product.title}</h1>
            <div className={style.price}>{product.price} SEK</div>
            <div className={style.descriptionTitle}>BESKRIVNING</div>
            <p className={style.dprice}>{product.metaDescription.sve}</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Product

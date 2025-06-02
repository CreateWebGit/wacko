'use client'
import React, { useState } from 'react'
import style from './product.module.scss'
import Image from 'next/image'
import Link from 'next/link'

const Product = ({ data }) => {
  const product = data.docs[0]
  const [isImage, setImage] = useState(product.images[0].url)
  console.log('mydata', data)
  return (
    <>
      <div className={style.breadCrumbs}>
        KLÄDER /{' '}
        <Link className={`mylink ${style.myLink}`} href={`/${product.categories.sv}`}>
          {product.categories.sv.toUpperCase()}
        </Link>{' '}
        / <span>{product.title.toUpperCase()}</span>
      </div>

      <section className="cw-grid">
        <div className={`cw-col-6 cw-col-xs-12 ${style.imagesContainer}`}>
          <div className={style.img}>
            <Image src={isImage} width={435} height={580} alt="wacko skinnjackor" />
          </div>
          {product.images.length > 1 ? (
            <div className={style.thumbContainer}>
              {product.images.map((item) => (
                <div key={item.url} className={style.thumbImg} onClick={() => setImage(item.url)}>
                  <Image
                    src={item.url}
                    style={{ objectPosition: 'top' }}
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
        <div className="cw-col-1 cw-col-xs-12 " />
        <div className={`cw-col-5 cw-col-xs-12  ${style.textContainer}`}>
          <h1 className={style.title}>{product.title}</h1>
          <div className={style.price}>{product.price} SEK</div>
          <div className={style.descriptionTitle}>BESKRIVNING</div>
          <p className={style.dprice}>{product.metaDescription.sv}</p>
        </div>
      </section>
    </>
  )
}

export default Product

import React, { useState } from 'react'
import style from './productitem.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const ProductItem = ({ data }) => {
  const router = useRouter()
  const [isImage, setImage] = useState(data.images[0].url)

  const helpFunc = (str) => {
    str = str.replace(/\s+/g, '-')
    return str
  }

  const test = (e) => {
    router.push(data.categories.sve + '/' + helpFunc(data.title))
  }
  return (
    <div className={style.container} onClick={test}>
      <div className={style.imgWrapper}>
        <div>
          <div className={style.img}>
            <Image
              src={isImage}
              fill={true}
              layout="fill"
              objectFit="cover"
              alt="wacko skinnjackor"
            />
          </div>
          <div className={style.thumbContainer}>
            {data.images.map((item) => (
              <div
                className={style.thumbImg}
                key={item.url}
                onClick={(e) => {
                  setImage(item.url)
                  e.stopPropagation()
                }}
              >
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
        </div>
      </div>
      <div className={style.prodTitle}>Läderjacka</div>
      <div className={style.prodPrice}>{data.price} SEK</div>
    </div>
  )
}

export default ProductItem

import React, { useState } from 'react'
import style from './productitem.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Productitem = ({ data, category }) => {
  const router = useRouter()
  const [isImage, setImage] = useState(data.images[0].url)

  const helpFunc = (str) => {
    str = str.replace(/\s+/g, '-')
    return str
  }

  const test = (e) => {
    router.push(data.categories + '/' + helpFunc(data.title))
  }

  console.log('daaaata', data)
  return (
    <div className={`cw-col-4 ${style.container}`} onClick={test}>
      {data.damcategories === category ? (
        <div>
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
      ) : (
        ''
      )}
    </div>
  )
}

export default Productitem

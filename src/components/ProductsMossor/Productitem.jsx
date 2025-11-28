import React, { useState } from 'react'
import style from './productitem.module.scss'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { getLocaleFromPathname, prefixPath } from '@/lib/locales'

const Productitem = ({ data, category }) => {
  const router = useRouter()
  const pathname = usePathname()
  const locale = getLocaleFromPathname(pathname || '/')
  const [isImage, setImage] = useState(data.images[0].url)

  const helpFunc = (str) => {
    str = str.replace(/\s+/g, '-')
    return str
  }

  const test = () => {
    router.push(prefixPath(locale, `/${data.categories}/${helpFunc(data.title)}`))
  }

  console.log('daaaata', data)
  return (
    <>
      <div className={`cw-col-4 cw-col-xs-6 ${style.container}`} onClick={test}>
        <div className={style.imgWrapper}>
          <div className={style.img}>
            <Image src={isImage} width={281} height={335} alt="wacko skinnjackor" />
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
                <Image src={item.url} height={50} width={50} alt="wacko skinnjackor" />
              </div>
            ))}
          </div>
        </div>
        <div className={style.prodTitle}>{data.title}</div>
        <div className={style.prodPrice}>{data.price} SEK</div>
      </div>
    </>
  )
}

export default Productitem

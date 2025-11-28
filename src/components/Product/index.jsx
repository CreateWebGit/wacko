'use client'
import React, { useMemo, useState } from 'react'
import style from './product.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { DEFAULT_LOCALE, getLocaleFromPathname, prefixPath } from '@/lib/locales'

const resolveLocalizedValue = (value, locale) => {
  if (!value) return ''
  if (typeof value === 'string') return value
  if (typeof value === 'object') {
    if (typeof value[locale] === 'string') return value[locale]
    if (typeof value[DEFAULT_LOCALE] === 'string') return value[DEFAULT_LOCALE]
    const fallback = Object.values(value).find((entry) => typeof entry === 'string' && entry.length > 0)
    return fallback || ''
  }
  return ''
}

const Product = ({ data }) => {
  const product = data.docs[0]
  const pathname = usePathname()
  const locale = getLocaleFromPathname(pathname || '/')
  const [isImage, setImage] = useState(product.images[0].url)

  const categorySlug = useMemo(() => resolveLocalizedValue(product.categories, locale), [product.categories, locale])
  const metaDescription = resolveLocalizedValue(product.metaDescription, locale)
  const categoryHref = categorySlug ? prefixPath(locale, `/${categorySlug}`) : prefixPath(locale, '/')

  return (
    <>
      <div className={style.breadCrumbs}>
        KLÄDER /{' '}
        <Link className={`mylink ${style.myLink}`} href={categoryHref}>
          {categorySlug?.toUpperCase()}
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
          <p className={style.dprice}>{metaDescription}</p>
        </div>
      </section>
    </>
  )
}

export default Product

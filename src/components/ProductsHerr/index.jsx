'use client'
import React, { useState } from 'react'
import style from './products.module.scss'
import Link from 'next/link'
import Productitem from '@/components/ProductsHerr/Productitem'
import { cn } from '@/utils/utils'

const ProductsHerr = ({ title, categories, prodTitle, prodText, post }) => {
  const [isCategory, setCategory] = useState('jackor')
  const [isProducts, setProducts] = useState('')
  const [isWidth, setWidth] = useState()
  const [isReadmore, setReadmore] = useState(false)
  const helpFunc = (str) => {
    str = str.replace(/\s+/g, '-').toLowerCase()
    return str
  }

  React.useEffect(() => {
    // window is accessible here.
    console.log('window.innerHeight', window.innerHeight)
    setWidth(window.innerWidth)
  }, [])

  console.log('herrar', post)

  return (
    <>
      <div className={style.breadCrumbs}>
        KLÄDER / <span>{categories}</span>
      </div>

      <section className={`cw-grid ${style.prodContainer}`}>
        <h1 className="cw-col-12 cw-col-xs-12">{title}</h1>
        <div className={`cw-col-12 cw-col-xs-12 ${style.labelContainer}`}>
          <div
            className={cn('', isCategory === 'jackor' ? style.activeLabel : style.label)}
            onClick={() => setCategory('jackor')}
          >
            JACKOR
          </div>
          <div
            className={cn('', isCategory === 'skinnväst' ? style.activeLabel : style.label)}
            onClick={() => setCategory('skinnväst')}
          >
            SKINNVÄST
          </div>
          <div
            className={cn('', isCategory === 'handskar' ? style.activeLabel : style.label)}
            onClick={() => setCategory('handskar')}
          >
            HANDSKAR
          </div>
          <div
            className={cn('', isCategory === 'hattar' ? style.activeLabel : style.label)}
            onClick={() => setCategory('hattar')}
          >
            HATTAR
          </div>
          <div
            className={cn('', isCategory === 'bälten' ? style.activeLabel : style.label)}
            onClick={() => setCategory('bälten')}
          >
            BÄLTEN
          </div>
          <div
            className={cn('', isCategory === 'plånböcker' ? style.activeLabel : style.label)}
            onClick={() => setCategory('plånböcker')}
          >
            PLÅNBÖCKER
          </div>

          <div
            className={cn('', isCategory === 'kepsar' ? style.activeLabel : style.label)}
            onClick={() => setCategory('kepsar')}
          >
            Kepsar
          </div>
          <div
            className={cn('', isCategory === 'mössor' ? style.activeLabel : style.label)}
            onClick={() => setCategory('mössor')}
          >
            Mössor
          </div>
        </div>
        <div className={`cw-col-12 cw-col-xs-12 ${style.productsHeader}`}>
          <div>44 produkter</div>
          <div>
            <span>Sortera efter </span>Popularitet ∨
          </div>
        </div>
        <hr className={`cw-col-12  cw-col-xs-12 ${style.line}`} />
        <div className={`cw-col-4  cw-col-xs-12 ${style.prodIntro}`}>
          <h2>{prodTitle}</h2>

          {isWidth > 800 ? (
            <p>{prodText}</p>
          ) : (
            <>
              {isReadmore === false ? (
                <p>
                  {prodText.slice(0, 110) + '... '}
                  <span onClick={() => setReadmore(true)}>Läs mer</span>
                </p>
              ) : (
                <p>
                  {prodText} <br />
                  <span className={style.readmore} onClick={() => setReadmore(false)}>
                    Läs mindre
                  </span>
                </p>
              )}
            </>
          )}
        </div>
        {post.docs.map((item, index) => (
          <Productitem data={item} category={isCategory} key={index} />
        ))}
      </section>
    </>
  )
}

export default ProductsHerr

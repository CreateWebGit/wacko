'use client'
import React, { useState } from 'react'
import style from './products.module.scss'
import Link from 'next/link'
import Productitem from '@/components/ProductsVaskor/Productitem'
import { cn } from '@/utils/utils'

const ProductsVaskor = ({ title, categories, prodTitle, prodText, post }) => {
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

  return (
    <>
      <div className={style.breadCrumbs}>
        KLÄDER / <span>{categories.toUpperCase()} </span>
      </div>

      <section className={`cw-grid ${style.prodContainer}`}>
        <h1 className="cw-col-12 cw-col-xs-12">{title}</h1>

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
          <div key={index} className="cw-col-4 cw-col-xs-6">
            <Productitem data={item} category={isCategory} />
          </div>
        ))}
      </section>
    </>
  )
}

export default ProductsVaskor

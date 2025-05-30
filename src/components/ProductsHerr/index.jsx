'use client'
import React, { useState } from 'react'
import style from './products.module.scss'
import Link from 'next/link'
import ProductItem from '@/components/ProductsHerr/Productitem'
import { cn } from '@/utils/utils'

const ProductsHerr = ({ title, categories, prodTitle, prodText, post }) => {
  const [isCategory, setCategory] = useState('all')
  const helpFunc = (str) => {
    str = str.replace(/\s+/g, '-').toLowerCase()
    return str
  }

  return (
    <>
      <div className={style.breadCrumbs}>
        KLÄDER / <span>{categories}</span>
      </div>

      <section>
        <div className={style.prodContainer}>
          <div>
            <h1>{title}</h1>
            <div className={style.labelContainer}>
              <div
                className={cn('', isCategory === 'jackor' ? style.activeLabel : style.label)}
                onClick={() => setCategory('jackor')}
              >
                JACKOR
              </div>
              <div
                className={cn('', isCategory === 'handskar' ? style.activeLabel : style.label)}
                onClick={() => setCategory('handskar')}
              >
                HANDSKAR
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
                className={cn('', isCategory === 'hattar' ? style.activeLabel : style.label)}
                onClick={() => setCategory('hattar')}
              >
                HATTAR
              </div>
            </div>
            <div className={style.productsHeader}>
              <div>44 produkter</div>
              <div>
                <span>Sortera efter </span>Popularitet ∨
              </div>
            </div>
            <hr className={style.line} />
            <div className={style.prodContainer}>
              <div className={style.prodIntro}>
                <h2>{prodTitle}</h2>
                <p>{prodText}</p>
              </div>
              {post.docs.map((item, index) => (
                <div key={index}>
                  <ProductItem data={item} category={isCategory} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProductsHerr

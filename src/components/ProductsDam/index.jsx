'use client'
import React, { useState } from 'react'
import style from './products.module.scss'
import Link from 'next/link'
import Productitem from '@/components/ProductsDam/ProductItem'
import { cn } from '@/utils/utils'

const ProductsDam = ({ title, categories, prodTitle, prodText, post }) => {
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
            <div className={style.prodContent}>
              <div className={style.prodIntro}>
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
                <div key={index}>
                  <Productitem data={item} category={isCategory} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProductsDam

'use client'
import React, { useState } from 'react'
import style from './products.module.scss'
import Link from 'next/link'
import Productitem from '@/components/ProductsHerr/Productitem'
import { cn } from '@/utils/utils'

const ProductsHerr = ({ title, categories, prodTitle, prodText, post }) => {
  const [isCategory, setCategory] = useState('wintercategories')
  const [isProducts, setProducts] = useState('')
  const [isWidth, setWidth] = useState()
  const [isReadmore, setReadmore] = useState(false)
  // const [isProductsCount, setProductsCount] = useState(0)
  const helpFunc = (str) => {
    str = str.replace(/\s+/g, '-').toLowerCase()
    return str
  }

  const shownProducts = post.docs.filter((item) => item.wintercategories === isCategory)
  const isProductsCount = shownProducts.length

  console.log(categories)
  
    const subCategoryMap = {
        Herr: [
            'Mössor', 'handskar', 'halsdukar'
        ]
    }

    const renderSubcategoryButtons = () => {
    if (!subCategoryMap[categories]) return null

    // Get subcategories that exist in the data
    const availableSubs = subCategoryMap[categories].filter((sub) =>
        post.docs.some(p => p.wintercategories === sub)
    )

    return (
        <div className={`cw-col-12 cw-col-xs-12 ${style.labelContainer}`}>
            {availableSubs.map((sub) => (
                <div
                    key={sub}
                    className={cn('', isCategory === sub ? style.activeLabel : style.label)}
                    onClick={() => setCategory(sub)}
                >
                    {sub.toUpperCase()}
                </div>
            ))}
        </div>
    )
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
        KLÄDER / {categories.toUpperCase()} / <span>{isCategory.toUpperCase()}</span>
      </div>

      <section className={`cw-grid ${style.prodContainer}`}>
        <h1 className="cw-col-12 cw-col-xs-12">{title}</h1>
        {renderSubcategoryButtons()}
        <div className={`cw-col-12 cw-col-xs-12 ${style.productsHeader}`}>
          <div>{isProductsCount} produkter</div>
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
          <Productitem data={item} category={isCategory} index={index} key={index} />
        ))}
      </section>
    </>
  )
}

export default ProductsHerr

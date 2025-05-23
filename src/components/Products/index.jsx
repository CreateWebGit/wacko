'use client'
import React from 'react'
import style from './products.module.scss'
import Link from 'next/link'
import ProductItem from '@/components/ProductItem'

const Products = ({ title, prodTitle, prodText, post }) => {
  const helpFunc = (str) => {
    str = str.replace(/\s+/g, '-').toLowerCase()
    return str
  }

  return (
    <div className={style.container}>
      <div>
        <h1>{title}</h1>
        <div className={style.labelContainer}>
          <div className={style.label}>JACKOR</div>
          <div className={style.label}>HANDSKAR</div>
          <div className={style.label}>BÄLTEN</div>
          <div className={style.label}>PLÅNBÖCKER</div>
          <div className={style.label}>HATTAR</div>
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
              <ProductItem data={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Products

"use client"

import { useState, useEffect } from "react"

import ProductItem from '@/components/ProductItem'

export default function ProductList({ products, title, description }) {
    const [subCategory, setSubcategory] = useState('')
    const [readMoreActive, setReadMoreActive] = useState(false)
    
    //extract available subcategories from the products prop, ONLY UNIQUE INDEXES
    const subCategories = Array.from(
        new Set(
            products.docs.map(p => p.subCategory).filter(Boolean)
        )
    )

    //filter products by current active subcategory, otherwise show all products 
    const filteredProducts = subCategory ? products.docs.filter(p => p.subCategory === subCategory) : products.docs

    return (
        <div className="cw-grid productlist-wrapper cw-col-12 cw-col-xs-12">
            <div className="productlist-subcategory-container cw-col-xs-12 cw-col-12 mb-3">
                <button className={`subcategory-button ${subCategory === '' ? 'active' : ''}`} onClick={() => setSubcategory('')}>Alla</button>
                {subCategories.map((item) => 
                    <button key={item} className={`subcategory-button ${subCategory === item ? 'active' : ''}`} onClick={() => setSubcategory(item)}>{item}</button>
                )}
            </div>
            <div className="cw-col-12 cw-col-xs-12 product-counter mb-2">
                <p>{filteredProducts.length} produkter</p>
            </div>
            <div className="cw-grid productlist-container cw-col-12 cw-col-xs-12">
                <div className="product-description-container cw-col-4 cw-col-xs-12">
                    <div className="title">{title}</div>
                    <div className="description">
                        {description}
                    </div>
                    <div className="description-mobile">
                        {readMoreActive ? (<p>{description}</p>) : (<span className="p">{description.slice(0,110) + '... '}</span>)}
                        <span onClick={() => setReadMoreActive(active => !active)} className="title no-lines">{readMoreActive ? 'Läs mindre' : 'Läs mer'}</span>
                    </div>
                </div>
                {filteredProducts.map((item) => 
                    <ProductItem key={item.id} product={item}></ProductItem>
                )}
            </div>
        </div>
    )
}
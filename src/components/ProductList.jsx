'use client'

import { useState, useEffect } from 'react'
import {useRouter, useSearchParams} from 'next/navigation'

import ProductItem from '@/components/ProductItem'
import { SUBCATEGORY_LABELS, tUI, tSubcategory } from '@/lib/subcategoryTranslations'

export default function ProductList({ products, title, description, locale }) {
    const router = useRouter();
    const searchParams = useSearchParams()

    const querySubCategory = searchParams.get('q') || ''

    const [subCategory, setSubcategory] = useState(querySubCategory)
    const [readMoreActive, setReadMoreActive] = useState(false)

    //extract available subcategories from the products prop, ONLY UNIQUE INDEXES
    const subCategories = Array.from(
        new Set(products.docs.map((p) => p.subCategory).filter(Boolean))
    )

    const setSubcategoryAndQuery = (value) => {
        setSubcategory(value)

        const params = new URLSearchParams(searchParams.toString())

        if (value) {
            params.set('q', value)
        } else {
            params.delete('q')
        }

        router.replace(`?${params.toString()}`, { scroll: false })
    }

    //filter products by current active subcategory, otherwise show all products
    const filteredProducts = subCategory
        ? products.docs.filter((p) => p.subCategory === subCategory)
        : products.docs

    return (
        <div className="cw-grid productlist-wrapper cw-col-12 cw-col-xs-12">
            <div className="productlist-subcategory-container cw-col-xs-12 cw-col-12 mb-3">
                <button
                    className={`subcategory-button ${subCategory === '' ? 'active' : ''}`}
                    onClick={() => setSubcategoryAndQuery('')}
                >
                    {tUI('all', locale)}
                </button>

                {subCategories.map((value) => (
                    <button
                        key={value}
                        className={`subcategory-button ${subCategory === value ? 'active' : ''}`}
                        onClick={() => setSubcategoryAndQuery(value)}
                    >
                        {tSubcategory(value, locale)}
                    </button>
                ))}
            </div>
            <div className="cw-col-12 cw-col-xs-12 product-counter mb-2">
                <p>{filteredProducts.length} {locale === 'sv' ? 'produkter' : 'products'}</p>
            </div>
            <div className="cw-grid productlist-container cw-col-12 cw-col-xs-12">
                <div className="product-description-container cw-col-4 cw-col-xs-12">
                    <div className="title">{title}</div>
                    <div className="description">{description}</div>
                    <div className="description-mobile">
                        {readMoreActive ? (
                            <p>{description}</p>
                        ) : (
                            <span className="p">{description.slice(0, 110) + '... '}</span>
                        )}
                        <span
                            onClick={() => setReadMoreActive((active) => !active)}
                            className="title no-lines"
                        >
                            {
                                readMoreActive
                                    ? (locale === 'sv' ? 'Läs mindre' : 'Read less')
                                    : (locale === 'sv' ? 'Läs mer' : 'Read more')
                            }
                        </span>
                    </div>
                </div>
                {filteredProducts.map((item) => (
                    <ProductItem key={item.id} product={item}></ProductItem>
                ))}
            </div>
        </div>
    )
}

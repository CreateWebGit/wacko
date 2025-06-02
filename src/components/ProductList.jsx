"use client"

import { useState } from "react"

export default function ProductList({ category, products }) {
    const [subCategory, setSubcategory] = useState('')

    const subCategoryMap = {
        herr: [
            'jackor', 'skinnväst', 'skinnbyxor', 'handskar',
            'bälten', 'plånböcker', 'hattar', 'kepsar', 'mössor'
        ],
        dam: [
            'jackor', 'västar', 'handskar',
            'bälten', 'plånböcker'
        ],
        accessoarer: [
            'halsdukar', 'bälten', 'necessar',
            'plånböcker', 'nyckelfodral', 'korthållare'
        ]
    }

    const detectedCategory = (() => {
        if (products.docs.some(p => p.herrcategories)) return 'herr'
        if (products.docs.some(p => p.damcategories)) return 'dam'
        if (products.docs.some(p => p.accessoarercategories)) return 'accessoarer'
        return null
    })()

    const renderSubcategoryButtons = () => {
        if (!detectedCategory) return null

        return (
            <div className="subcategory-buttons">
                {subCategoryMap[detectedCategory].map((sub) => (
                    <button
                        key={sub}
                        onClick={() => setSubcategory(sub)}
                        className={subCategory === sub ? 'active' : ''}
                    >
                        {sub}
                    </button>
                ))}
            </div>
        )
    }

    const ProductLoop = () => {
        const filteredProducts = products.docs.filter(product => {
            if (!subCategory) return true;

            switch (detectedCategory) {
                case 'herr':
                    return product.herrcategories === subCategory
                case 'dam':
                    return product.damcategories === subCategory
                case 'accessoarer':
                    return product.accessoarercategories === subCategory
                default:
                    return true
            }
        })

        if (filteredProducts.length === 0) {
            return <p>Inga produkter hittades för vald underkategori.</p>
        }

        return (
            <div className="product-list">
                {filteredProducts.map((product, idx) => (
                    <div key={idx}>
                        <p>{product.title}</p>
                        <p>Kategori: {product.categories}</p>
                        <p>Underkategori: {product.herrcategories || product.damcategories || product.accessoarercategories}</p>
                    </div>
                ))}
            </div>
        )
    }

    return (
        <div>
            {renderSubcategoryButtons()}
            <ProductLoop />
        </div>
    )
}

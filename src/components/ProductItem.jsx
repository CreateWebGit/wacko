'use client'

import { useState } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { getLocaleFromPathname, prefixPath } from '@/lib/locales'

export default function ProductItem({ product }) {
    const pathname = usePathname()
    const locale = getLocaleFromPathname(pathname || '/')
    const [selectedImage, setSelectedImage] = useState(product.images[0].url)

    const decodeURL = (str) => {
        str = str.replace(/\s+/g, '-')
        return str.toLowerCase()
    }

    const productHref = prefixPath(locale, `/${product.categories}/${product.id + '-' + decodeURL(product.title)}`)

    return (
        <a
            href={productHref}
            hrefLang={locale}
            className="product-item-container cw-col-4 cw-col-xs-12 no-line"
        >
            <div className="images-container">
                <div className="image-container">
                    <img src={selectedImage} width={281} height={335} alt={product.title} />
                </div>
                <div onClick={(e) => e.preventDefault()} className="thumbnail-container">
                    {product.images.map((thumbnailImage) => (
                        <div
                            onClick={() => setSelectedImage(thumbnailImage.url)}
                            key={thumbnailImage.url}
                            className="thumbnail-item-container"
                        >
                            <img src={thumbnailImage.url} height="64px" width="64px" />
                        </div>
                    ))}
                </div>
            </div>
            <div className="item-info-container">
                <div className="title">{product.title}</div>
                <div className="price">{product.price} SEK</div>
            </div>
        </a>
    )
}

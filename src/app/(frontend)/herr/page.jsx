import { getPayload } from 'payload'
import config from '@/payload.config'
import Link from 'next/link'
import Image from 'next/image'

import HeaderLight from '@/components/HeaderLight'
import HeroNews from '@/components/sections/HeroNews'
import Breadcrumbs from '@/components/Breadcrumbs'

import ProductList from '@/components/ProductList'


export default async function Herr() {
	const payloadConfig = await config
	const payload = await getPayload({ config: payloadConfig })
	const products = await payload.find({
		collection: 'products',
		locale: 'sv',
		limit: 100,
		where: {
			categories: {
				equals: 'dam'
			}
		}
	})

	const urlFormatter = (url) => {
		url = url.replace(/\s+/g, '-').toLowerCase()
		return url
	}

	console.log(products)

	return (
		<>
			<ProductList products={products}/>
		</>
	)
}
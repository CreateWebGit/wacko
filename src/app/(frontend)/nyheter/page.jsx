import { getPayload } from 'payload'
import config from '@/payload.config'
import Link from 'next/link'
import Image from 'next/image'

import HeaderLight from '@/components/HeaderLight'
import HeroNews from '@/components/sections/HeroNews'
import Breadcrumbs from '@/components/Breadcrumbs'
import Footer from '@/components/Footer'


export default async function Nyheter() {
	const payloadConfig = await config
	const payload = await getPayload({ config: payloadConfig })
	const posts = await payload.find({
		collection: 'news',
		locale: 'sv',
	})

	const urlFormatter = (url) => {
		url = url.replace(/\s+/g, '-').toLowerCase()
		return url
	}

	console.log(posts)

	return (
		<>
			
			<HeaderLight/>
			<HeroNews/>
			<section className="cw-section--newslist cw-grid gap-2 pb-4 pt-2">
				{posts.docs.map((post) => (
					<Link className="cw-col-4 cw-col-xs-12 news-item" href={{pathname: '/nyheter/' + urlFormatter(post.title)}} key={post.title} >
						<div className="image-container">
							<Image alt={post.title} src={post.images[0].url} width={373 * 2} height={199 * 2}/>
						</div>
						<div className="text-container">
							<div className="title-container">
								<h1 className="h3">{post.title}</h1>
							</div>
							<div className="ingress-container">
								<p>{post.ingress}</p>
							</div>
						</div>
					</Link>
				))}
				
			</section>
			<Footer/>
		</>
	)
}
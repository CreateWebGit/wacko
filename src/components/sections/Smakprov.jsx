import Link from 'next/link'

import { getPayload } from 'payload'
import config from '@/payload.config'

export default async function SectionSmakprov() {
	const payloadConfig = await config
	const payload = await getPayload({ config: payloadConfig })
	const posts = await payload.find({
		collection: 'products',
		locale: 'sv',
		limit: 5,
		where: {
			categories: {
				equals: 'herr',
			},
		},
	})

	console.log(posts)
	return (
		<section className="cw-section--smakprov padding-left">
		<div className="smakprov__text-container">
			<div>
			<h2>Ett smakprov ur kollektionen.</h2>
			<p className="mt-2">
				Vi uppdaterar vårt sortiment kontinuerligt med nya läderjackor, väskor och accessoarer –
				alltid med säsongens behov i åtanke. Här hittar du ett urval av våra favoriter just nu.
			</p>
			</div>

			<a className="hide-mobile" href="/herr">
			Se alla våra produkter -&gt;
			</a>
		</div>
		<div className="smakprov__product-container">
			<div className="product-wrapper">
				{posts.docs.map((post) => (
					<div key={post.id} className="product-item">
						<div className="product-image-wrapper">
							<div className="product-image-container">
								<img src={post.images[0].url}/>
							</div>
							<div className="product-thumbnail-wrapper">
								{post.images.map((img) => (
									<div className="product-thumbnail-container">
										<img key={img.url} src={img.url}/>
									</div>
								))}
							</div>
						</div>
						<div className="product-text-container">
							<div className="product-name">{post.title}</div>
							<div className="product-price">{post.price} SEK</div>
						</div>
					</div>
				))}
			</div>
		</div>
		</section>
	)
}

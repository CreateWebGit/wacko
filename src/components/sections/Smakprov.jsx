import { getPayload } from 'payload'
import config from '@/payload.config'
import { DEFAULT_LOCALE, prefixPath, validateLocale } from '@/lib/locales'

export default async function SectionSmakprov({ locale = DEFAULT_LOCALE }) {
    const safeLocale = validateLocale(locale) ?? DEFAULT_LOCALE
    const payloadConfig = await config
    const payload = await getPayload({ config: payloadConfig })
    const posts = await payload.find({
        collection: 'products',
        locale: safeLocale,
        limit: 5,
        where: {
            categories: {
                equals: 'herr'
            }
        }
    })

    return (
        <section className="cw-section--smakprov padding-left mb-2">
            <div className="smakprov__text-container">
                <div>
                    <h2>
                        {locale === 'sv'
                            ? 'Ett smakprov ur kollektionen.'
                            : 'A preview of the collection'}
                    </h2>
                    <p className="mt-2">
                        {locale === 'sv'
                            ? 'Vi uppdaterar vårt sortiment kontinuerligt med nya läderjackor, väskor och accessoarer – alltid med säsongens behov i åtanke. Här hittar du ett urval av våra favoriter just nu.'
                            : 'We continuously update our collection with new leather jackets, bags, and accessories — always with the needs of the season in mind. Here you’ll find a selection of our current favorites.'}
                    </p>
                </div>

                <a className="hide-mobile" href={prefixPath(safeLocale, '/herr')}>
                    {locale === 'sv' ? 'Se alla våra produkter' : 'See all of our products'} -&gt;
                </a>
            </div>
            <div className="smakprov__product-container">
                <div className="product-wrapper">
                    {posts.docs.map((post) => (
                        <div key={post.id} className="product-item">
                            <div className="product-image-wrapper">
                                <div className="product-image-container">
                                    <img src={post.images[0].url} alt={post.title} />
                                </div>
                                <div className="product-thumbnail-wrapper">
                                    {post.images.map((img) => (
                                        <div key={img.url} className="product-thumbnail-container">
                                            <img src={img.url} alt={post.title} />
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

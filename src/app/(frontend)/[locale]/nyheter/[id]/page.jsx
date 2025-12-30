import { getPayload } from 'payload'
import config from '@/payload.config'
import slugify from 'slugify'
import Breadcrumbs from '@/components/Breadcrumbs'
import Footer from '@/components/Footer'

import Header from '@/components/Header'
import Image from 'next/image'

import Link from 'next/link'
import { notFound } from 'next/navigation'
import { DEFAULT_LOCALE, buildCanonical, validateLocale } from '@/lib/locales'

export default async function NyheterPage({ params }) {
    const resolvedParams = await params
    const locale = validateLocale(resolvedParams?.locale) ?? DEFAULT_LOCALE
    const payloadConfig = await config
    const payload = await getPayload({ config: payloadConfig })
    const { id } = resolvedParams
    const normalizedSlug = slugify(decodeURI(id), { lower: true, strict: true })

    const result = await payload.find({
        collection: 'news',
        locale,
        where: {
            slug: {
                equals: normalizedSlug
            }
        }
    })

    const post = result.docs[0]

    if (!post) {
        notFound()
    }

    const articlePath = `/nyheter/${normalizedSlug}`
    const articleUrl = buildCanonical(locale, articlePath)

    const dateFormatter = (dateString) => {
        const date = new Date(dateString)
        const formatted = new Intl.DateTimeFormat('en-US', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        }).format(date)

        return formatted
    }

    return (
        <>
            <Header lightHeader={true} />
            <Breadcrumbs margin={true} crumbLabel={post.title} />
            <section className="cw-section--newspost cw-grid">
                <div className="cw-cs-3 cw-ce-11 mt-5 cw-col-xs-12">
                    <h1 className="h2 text-center">{post.title}</h1>
                    <p className="text-center mt-2">{post.ingress}</p>
                    <div className="date-container mt-4">{dateFormatter(post.date)}</div>
                    <div className="image-container mt-3">
                        <Image src={post.images[0].url} width={868} height={340} alt={post.title} />
                    </div>
                    <div className="social-share-container mt-4">
                        <div className="share-text">{locale === 'sv' ? 'Dela' : 'Share'}</div>
                        <div className="social-media-icons">
                            <Link href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(articleUrl)}`} target="_blank">
                                <img src="/img/fb_icon.svg" alt="facebook icon" />
                            </Link>
                            <Link href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(articleUrl)}`} target="_blank">
                                <img src="/img/x_icon.svg" alt="x icon" />
                            </Link>
                            <Link href={`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(articleUrl)}`} target="_blank">
                                <img src="/img/pinterest_icon.svg" alt="pinterest icon" />
                            </Link>
                        </div>
                    </div>
                    <p className="news-post-content mt-4">{post.tabTwo.news}</p>
                    <div className="news-divider-line mt-4 mb-5"></div>
                </div>
            </section>
            <Footer />
        </>
    )
}

import { getPayload } from 'payload'
import config from '@/payload.config'
import Link from 'next/link'
import Image from 'next/image'

import Header from '@/components/Header'
import HeroNews from '@/components/sections/HeroNews'
import Breadcrumbs from '@/components/Breadcrumbs'
import Footer from '@/components/Footer'
import { DEFAULT_LOCALE, buildCanonical, prefixPath, validateLocale } from '@/lib/locales'

export async function generateMetadata({ params }) {
    const { locale: paramsLocale } = await params
    const locale = validateLocale(paramsLocale) ?? DEFAULT_LOCALE
    return {
        title: 'Nyheter | Wacko - Senaste kollektionerna och trenderna',
        description:
            'Det senaste från Wacko - nya kollektioner, trender och inspiration i skinn, stil och kvalitet.',
        alternates: {
            canonical: buildCanonical(locale, '/nyheter')
        }
    }
}

export default async function Nyheter({ params }) {
    const { locale: paramsLocale } = await params
    const locale = validateLocale(paramsLocale) ?? DEFAULT_LOCALE
    const payloadConfig = await config
    const payload = await getPayload({ config: payloadConfig })
    const posts = await payload.find({
        collection: 'news',
        locale
    })

    const urlFormatter = (url) => {
        url = url.replace(/\s+/g, '-').toLowerCase()
        return url
    }

    console.log(posts)

    return (
        <>
            <Header lightHeader={true} />
            <HeroNews locale={locale} />
            <section className="cw-section--newslist cw-grid gap-2 pb-4 pt-2">
                {posts.docs.map((post) => (
                    <Link
                        className="cw-col-4 cw-col-xs-12 news-item"
                        href={prefixPath(locale, `/nyheter/${urlFormatter(post.slug)}`)}
                        key={post.slug}
                    >
                        <div className="image-container">
                            <Image
                                alt={post.title}
                                src={post.images[0].url}
                                width={373 * 2}
                                height={199 * 2}
                            />
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
            <Footer />
        </>
    )
}

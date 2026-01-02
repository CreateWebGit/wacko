import { getPayload } from 'payload'
import config from '@/payload.config'
import { SUPPORTED_LOCALES, buildCanonical } from '@/lib/locales'

export const runtime = 'nodejs'
export const revalidate = 3600

const STATIC_PATHS = [
    '/',
    '/dam',
    '/herr',
    '/vaskor',
    '/vinterdetaljer',
    '/accessoarer',
    '/handskar',
    '/nyheter',
    '/om-oss',
    '/kontakta'
]

const normalizeSlug = (value: string) =>
    value
        .trim()
        .replace(/\s+/g, '-')
        .toLowerCase()

const toLastmod = (value?: string | Date | null) => {
    if (!value) return null
    const date = new Date(value)
    if (Number.isNaN(date.getTime())) return null
    return date.toISOString()
}

const buildEntry = (loc: string, lastmod?: string | null) => {
    return `  <url>\n    <loc>${loc}</loc>${lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : ''}\n  </url>`
}

export async function GET() {
    const payloadConfig = await config
    const payload = await getPayload({ config: payloadConfig })
    const urls: string[] = []

    for (const locale of SUPPORTED_LOCALES) {
        for (const path of STATIC_PATHS) {
            urls.push(buildEntry(buildCanonical(locale, path)))
        }

        const products = await payload.find({
            collection: 'products',
            locale,
            limit: 1000,
            depth: 0
        })

        products.docs.forEach((product) => {
            if (!product?.id || !product?.categories || !product?.title) return
            const slug = normalizeSlug(product.title)
            const productPath = `/${product.categories}/${product.id}-${slug}`
            urls.push(
                buildEntry(
                    buildCanonical(locale, productPath),
                    toLastmod(product.updatedAt || product.createdAt)
                )
            )
        })

        const news = await payload.find({
            collection: 'news',
            locale,
            limit: 1000,
            depth: 0
        })

        news.docs.forEach((post) => {
            if (!post?.slug) return
            const newsPath = `/nyheter/${normalizeSlug(post.slug)}`
            urls.push(
                buildEntry(
                    buildCanonical(locale, newsPath),
                    toLastmod(post.updatedAt || post.createdAt || post.date)
                )
            )
        })
    }

    const body = `<?xml version="1.0" encoding="UTF-8"?>\n` +
        `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
        `${urls.join('\n')}\n` +
        `</urlset>\n`

    return new Response(body, {
        headers: {
            'Content-Type': 'application/xml; charset=utf-8'
        }
    })
}

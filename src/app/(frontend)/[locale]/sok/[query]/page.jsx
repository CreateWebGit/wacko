import React from 'react'
import { getPayload } from 'payload'

import config from '@/payload.config'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProductList from '@/components/ProductList'
import Breadcrumbs from '@/components/Breadcrumbs'
import { DEFAULT_LOCALE, buildCanonical, validateLocale } from '@/lib/locales'

const categorySlugs = ['herr', 'dam', 'vaskor', 'vinterdetaljer', 'accessoarer']

const normalize = (value) =>
    value
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .trim()

const getCategoryFromQuery = (value) => {
    if (!value) return null
    const normalizedQuery = normalize(value)
    return categorySlugs.find((slug) => normalize(slug) === normalizedQuery) ?? null
}

export async function generateMetadata({ params }) {
    const resolvedParams = await params
    const locale = validateLocale(resolvedParams?.locale) ?? DEFAULT_LOCALE
    const rawQuery = resolvedParams?.query ?? ''
    const decodedQuery = decodeURIComponent(rawQuery)
    const trimmedQuery = decodedQuery.trim()
    const safeQuery = trimmedQuery || 'Sök'

    return {
        title: locale === 'sv' ? `Sök: ${safeQuery} | Wacko` : `Search: ${safeQuery} | Wacko`,
        description:
            locale === 'sv'
                ? `Sökresultat för ${safeQuery} på Wacko Skinn.`
                : `Search results for ${safeQuery} on Wacko.`,

        alternates: {
            canonical: buildCanonical(locale, `/sok/${rawQuery}`)
        }
    }
}

const SearchPage = async ({ params }) => {
    const resolvedParams = await params
    const locale = validateLocale(resolvedParams?.locale) ?? DEFAULT_LOCALE
    const rawQuery = resolvedParams?.query ?? ''
    const decodedQuery = decodeURIComponent(rawQuery)
    const trimmedQuery = decodedQuery.trim()
    const categorySlug = getCategoryFromQuery(trimmedQuery)

    let products = { docs: [] }

    if (trimmedQuery) {
        const payloadConfig = await config
        const payload = await getPayload({ config: payloadConfig })

        const filters = [
            {
                title: {
                    like: trimmedQuery
                }
            }
        ]

        if (categorySlug) {
            filters.push({
                categories: {
                    equals: categorySlug
                }
            })
        }

        const where = filters.length === 1 ? filters[0] : { or: filters }

        products = await payload.find({
            collection: 'products',
            locale,
            limit: 100,
            where
        })
    }

    const displayQuery = trimmedQuery || 'din sökning'
    const resultsCount = products.docs?.length ?? 0
    const description = trimmedQuery
        ? locale === 'sv'
            ? `Vi hittade ${resultsCount} träffar för "${displayQuery}". Justera sökningen eller filtrera med knapparna nedan för att hitta rätt produkt.`
            : `We found ${resultsCount} results for "${displayQuery}". Adjust your search or use the filters below to find the right product.`
        : locale === 'sv'
          ? 'Skriv ett sökord i fältet högst upp för att komma igång.'
          : 'Enter a search term in the field at the top to get started.'

    return (
        <div>
            <Header lightHeader={true} />
            <Breadcrumbs margin={true} />
            <section className="cw-grid">
                <div className="cw-col-12 mt-1 py-2">
                    <h1>{locale === 'sv' ? 'Sökresultat' : 'Search Results'}</h1>
                    <p className="mt-1">
                        {trimmedQuery
                            ? locale === 'sv'
                                ? `Visar resultat för "${displayQuery}"`
                                : `Showing results for "${displayQuery}"`
                            : locale === 'sv'
                              ? 'Ingen sökterm angavs.'
                              : 'No search term was provided.'}
                    </p>
                </div>
            </section>
            <section className="cw-grid pb-10">
                <ProductList
                    products={products}
                    title={`Sök: ${displayQuery}`}
                    description={description}
                />
            </section>
            <Footer />
        </div>
    )
}

export default SearchPage

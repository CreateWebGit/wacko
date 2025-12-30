'use client'

import { useEffect } from 'react'
import { DEFAULT_LOCALE } from '@/lib/locales'
import Image from 'next/image'

export default function AboutSticky({ introBlockContent, content, locale = DEFAULT_LOCALE }) {
    const timelineItems = Array.isArray(content) ? content : (content?.timeline ?? [])
    const introBlock = Array.isArray(content) ? null : content?.introBlock
    const introHeading = introBlock?.heading ?? 'Fyrtio år av form, funktion och förtroende'
    const introBody =
        introBlock?.body ??
        'Sedan starten på 80-talet har Wacko vuxit från ett litet skrädderi till ett etablerat namn inom svenskt skinnmode. Genom tid, trender och teknik har vi behållit vårt fokus: kompromisslös kvalitet, äkta material och stil som håller över tid. Följ vår utveckling – från första butiken till nästa digitala kapitel.'
    const introParagraphs = splitParagraphs(introBody)

    useEffect(() => {
        const items = document.querySelectorAll('.timeline-item')
        const yearTexts = document.querySelectorAll('.year-text')

        if (!items.length) return

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
                        const labelToActivate = entry.target.dataset.year

                        yearTexts.forEach((el) => {
                            el.classList.toggle('active', el.dataset.year === labelToActivate)
                        })
                    }
                })
            },
            {
                threshold: 0.5,
                root: null
            }
        )

        items.forEach((item) => observer.observe(item))

        return () => observer.disconnect()
    }, [timelineItems.length])

    return (
        <section className="cw-section--aboutsticky cw-grid full-width">
            <div className="sticky-container cw-col-5 hide-mobile">
                <h1 className="h3">{introBlockContent.heading}</h1>
                <div className="mt-1">
                    <p className="mt-2">{introBlockContent.body}</p>
                </div>
                <div className="timeline-year-container mt-3">
                    {timelineItems.map((item, index) => {
                        const yearLabel = item?.year ?? ''
                        const yearValue = yearLabel || `item-${index}`
                        return (
                            <div
                                className="year-text"
                                data-year={yearValue}
                                key={item?.id ?? yearValue}
                            >
                                {yearLabel}
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="timeline-container cw-col-7 cw-col-xs-12">
                {timelineItems.map((item, index) => {
                    const yearLabel = item?.year ?? ''
                    const yearValue = yearLabel || `item-${index}`
                    const imageData = getImageData(item?.image)
                    const bodyParagraphs = splitParagraphs(item?.body ?? '')
                    return (
                        <div
                            id={`timeline-${item?.id ?? index}`}
                            className="timeline-item"
                            data-year={yearValue}
                            key={item?.id ?? yearValue}
                        >
                            {index === 0 ? (
                                <div className="intro-mobile hide-desktop py-xs-2">
                                    <h1 className="h3">{introHeading}</h1>
                                    {introParagraphs.length ? (
                                        <div className="mt-2">
                                            {introParagraphs.map((paragraph, paragraphIndex) => (
                                                <p
                                                    className={paragraphIndex ? 'mt-2' : undefined}
                                                    key={`intro-mobile-${paragraphIndex}`}
                                                >
                                                    {paragraph}
                                                </p>
                                            ))}
                                        </div>
                                    ) : null}
                                </div>
                            ) : null}
                            <div className="timeline-image">
                                <Image
                                    src={imageData.url}
                                    width={imageData.width ?? 802}
                                    height={imageData.height ?? 327}
                                    alt={imageData.alt}
                                />
                            </div>
                            <div>
                                <p className="year">{yearLabel}</p>
                                <h1 className="h3">{item?.title}</h1>
                            </div>
                            <div>
                                {bodyParagraphs.map((paragraph, paragraphIndex) => (
                                    <p
                                        className={paragraphIndex ? 'mt-2' : undefined}
                                        key={`${item?.id ?? yearValue}-body-${paragraphIndex}`}
                                    >
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                            {/* {index === 0 ? <hr /> : null} */}
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

const splitParagraphs = (text) => {
    if (!text) return []
    return text
        .split(/\n\s*\n/)
        .map((paragraph) => paragraph.trim())
        .filter(Boolean)
}

const getImageData = (image) => {
    if (!image) return null
    if (typeof image === 'string') {
        return { url: image, alt: '' }
    }
    if (!image.url) return null
    return {
        url: image.url,
        alt: image.alt ?? '',
        width: image.width,
        height: image.height
    }
}

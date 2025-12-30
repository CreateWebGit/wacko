import Image from "next/image"
import { DEFAULT_LOCALE, prefixPath, validateLocale } from "@/lib/locales"

export default function SectionDignity({ locale = DEFAULT_LOCALE, content }) {
    const safeLocale = validateLocale(locale) ?? DEFAULT_LOCALE

    return (
        <section className="cw-section--dignity padding-right">
            <div className="dignity__image-container">
                <Image src="/img/dignity_image.png" width="852" height="588" alt="Bild av en man som tillverkar ett bälte av läder."></Image>
            </div>
            <div className="dignity__text-container">
                <div>
                    <h2>{content.heading}</h2>
                    <p className="mt-2">{content.body}</p>
                </div>
                <a href={prefixPath(safeLocale, content.link[0].href)}>{content.link[0].text} -&gt;</a>
            </div>
        </section>
    )
}

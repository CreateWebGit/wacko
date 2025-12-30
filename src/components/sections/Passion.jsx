import Image from "next/image";

export default function SectionPassion({content}) {
    return (
        <section className="cw-section--passion padding-left">
            <div className="passion__text-container">
                <div>
                    <h2>{content.heading}</h2>
                    <p className="mt-2">{content.body}</p>
                </div>
                <a href={content.link[0].href}>{content.link[0].text} -&gt;</a>
            </div>
            <div className="passion__image-container">
                <Image src="/img/passion_image_alt.png" width="852" height="588" alt="Bild av ett ställ med diverse läderjackor."></Image>
            </div>
        </section>
    )
}
import Image from "next/image"

export default function SectionDignity() {
    return (
        <section className="cw-section--dignity padding-right">
            <div className="dignity__image-container">
                <Image src="/img/dignity_image.png" width="852" height="588" alt="Bild av en man som tillverkar ett bälte av läder."></Image>
            </div>
            <div className="dignity__text-container">
                <div>
                    <h2>Skinn som åldras med värdighet.</h2>
                    <p className="mt-2">Vi tror på produkter som bara blir bättre med tiden. Därför arbetar vi med exklusivt kalvskinn och andra högkvalitativa material som valts ut med stor omsorg.</p>
                </div>
                <a href="">Läs mer om våran historia -&gt;</a>
            </div>
        </section>
    )
}
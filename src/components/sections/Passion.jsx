import Image from "next/image";

export default function SectionPassion() {
    return (
        <section className="cw-section--passion padding-left">
            <div className="passion__text-container">
                <div>
                    <h2>Två butiker. <br></br>En passion för skinn.</h2>
                    <p className="mt-2">Wacko Skinnmode är två butiker med en gemensam vision. Att erbjuda hållbara skinn- och läderprodukter som håller över tid, både i stil och kvalitet. Vår filosofi bygger på att mode inte ska vara slit-och-släng.</p>    
                </div>
                <a href="">Hitta din närmaste butik -&gt;</a>
            </div>
            <div className="passion__image-container">
                <Image src="/img/passion_image.png" width="852" height="588" alt="Bild av ett ställ med diverse läderprodukter."></Image>
            </div>
        </section>
    )
}
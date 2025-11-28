import Image from "next/image";

export default function SectionPassion() {
    return (
        <section className="cw-section--passion padding-left">
            <div className="passion__text-container">
                <div>
                    <h2>En butik. <br></br>En passion för skinn.</h2>
                    <p className="mt-2">Wacko Skinnmode står för tidlös stil och äkta hantverk. I vår butik hittar du noggrant utvalda skinn- och läderprodukter som håller över tid. Både i kvalitet och uttryck. Vår filosofi är enkel: mode ska inte vara slit-och-släng, utan något du bär med stolthet, år efter år.</p>    
                </div>
                <a href="#hitta-hit">Hitta hit -&gt;</a>
            </div>
            <div className="passion__image-container">
                <Image src="/img/passion_image_alt.png" width="852" height="588" alt="Bild av ett ställ med diverse läderjackor."></Image>
            </div>
        </section>
    )
}
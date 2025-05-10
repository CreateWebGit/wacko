export default function SectionHero() {
    return (
        <section className="cw-section--hero cw-grid full-width">
            <div className="cw-col-6 cw-col-xs-12 cw-c-justify-center cw-flex-column pl-4">
                <h1 className="text-white">Tidlös elegans <br></br> i äkta skinn.</h1>
                <p className="mt-2 text-white">
                    Sedan 1992 har vi klätt Stockholm i skinn med attityd – där tidlös elegans möter <br></br> modern edge. Välkommen till våra butiker på Södermalm eller utforska vårt urval <br></br> direkt online.
                </p>
                <div className="d-flex gap-1 mt-4">
                    <button className="primary">Utforska kollektionen</button>
                    <button className="stroked">Hitta din närmaste butik</button>
                </div>
            </div>
            <div className="cw-col-6 cw-col-xs-12 "></div>
            {/* <video src="/img/hero_bg_movie_placeholder.mp4" autoPlay playsInline muted loop></video> */}
        </section>
    )
}
export default function SectionHeroAbout() {
    return (
        <section className="cw-section--heroAbout cw-grid full-width">
            <div className="cw-col-8 cw-col-xs-12 cw-c-justify-center cw-flex-column pl-4">
                <h1 className="text-white text-center-xs">Wackos resa &mdash; från nål och tråd. Till läder och legacy.</h1>
                <p className="mt-2 text-white text-center-xs">
                    Möt Abdo &mdash; mannen bakom Wacko. En självlärd skräddare med näsa för design, hjärta för människor och fingertoppskänsla för skinn. Från små lokaler i innerstan till ikoniska butiker på Södermalm &mdash; det här är resan genom stil, hantverk och ett liv i stadens hjärta.

                </p>
                <div className="d-flex gap-1 mt-4 button-container">
                    <button className="primary">Utforska kollektionen</button>
                    <button className="stroked hide-mobile">Hitta din närmaste butik</button>
                    <a className="text-white hide-desktop" href="">Hitta din närmaste butik -&gt;</a>
                </div>
            </div>
            <div className="cw-col-4 cw-col-xs-12 empty-col"></div>
        </section>
    )
}
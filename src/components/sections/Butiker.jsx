export default function Butiker({locale}) {
    return (
        <section id="hitta-hit" className="cw-section--butiker cw-grid gap-2 pt-xs-5 py-5 mb-5">
            <div className="cw-col-12 cw-col-xs-12 mb-2">
                <h1 className="h2 text-center">{ locale === 'sv' ? 'Våran butik' : 'Our store'}</h1>
                <p className="text-center mt-1">{ locale === 'sv'  ? 'Du hittar Wacko Skinnmode i hjärtat av Södermalm' : "You'll find Wacko in the heart of Södermalm" }</p>
            </div>
            <div className="cw-cs-3 cw-ce-11 cw-col-xs-12 butik-container">
                <div className="image-container">
                    <iframe src="https://www.google.com/maps/embed/v1/place?q=Nya+Wacko+skinnmode&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
                </div>
                <div className="text-container">
                    <p className="butik-tag">{locale === 'sv' ? 'Butik' : 'Store'}</p>
                    <h2 className="butik-title">Götgatan 35</h2>
                    <p className="hours mt-1">
                        <span>{locale === 'sv' ? 'MÅN - FRE' : 'MON - FRI'}: <span className="text-accent">11:00 &mdash; 18:00</span> <br /></span>
                        <span>{locale === 'sv' ? 'LÖR' : 'SAT'}: <span className="text-accent">11:00 &mdash; 16:00</span> <br /></span>
                        <span>{locale === 'sv' ? 'SÖN' : 'SUN'}:  <span className="text-accent">{locale === 'sv' ? 'Stängt' : 'Closed'}</span></span>
                    </p>
                </div>
            </div>
            {/* <div className="cw-cs-7 cw-ce-11 cw-col-xs-12 butik-container">
                <div className="image-container">
                    <iframe src="https://www.google.com/maps/embed/v1/place?q=Wacko+outlet&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
                </div>
                <div className="text-container">
                    <p className="butik-tag">OUTLET</p>
                    <h2 className="butik-title">Hornsgatan</h2>
                    <p className="hours mt-1">
                        MÅN - FRE: 11:00 &mdash; 18:00 <br />
                        LÖR: 11:00 &mdash; 16:00 <br />
                        SÖN: Stängt
                    </p>
                </div>
            </div> */}
        </section>
    )
}
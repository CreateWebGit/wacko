export default function Butiker() {
    return (
        <section className="cw-section--butiker cw-grid gap-2 pt-xs-5 py-5 mb-5">
            <div className="cw-col-12 cw-col-xs-12 mb-2">
                <h1 className="h2 text-center">Våra butiker</h1>
                <p className="text-center mt-1">Du hittar Wacko Skinnmode på två adresser i hjärtat av Södermalm</p>
            </div>
            <div className="cw-cs-3 cw-ce-7 cw-col-xs-12 butik-container">
                <div className="image-container">
                    <iframe src="https://www.google.com/maps/embed/v1/place?q=Nya+Wacko+skinnmode&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
                </div>
                <div className="text-container">
                    <p className="butik-tag">BUTIK</p>
                    <h2 className="butik-title">Götgatan</h2>
                    <p className="hours mt-1">
                        MÅN - FRE: 11:00 &mdash; 18:00 <br />
                        LÖR: 11:00 &mdash; 16:00 <br />
                        SÖN: Stängt
                    </p>
                </div>
            </div>
            <div className="cw-cs-7 cw-ce-11 cw-col-xs-12 butik-container">
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
            </div>
        </section>
    )
}
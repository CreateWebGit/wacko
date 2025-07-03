import Link from 'next/link'

export default function SectionHero() {
  return (
    <section className="cw-section--hero cw-grid full-width">
      <div className="cw-col-6 cw-col-xs-12 cw-c-justify-center cw-flex-column pl-4">
        <h1 className="text-white text-center-xs">
          Tidlös elegans <br></br> i äkta skinn.
        </h1>
        <p className="mt-2 text-white text-center-xs">
          Sedan 1982 har vi klätt Stockholm i skinn med attityd – där tidlös elegans möter{' '}
          <br className="hide-mobile"></br> modern edge. Välkommen till våra butiker på Södermalm
          eller utforska vårt urval <br></br> direkt online.
        </p>
        <div className="d-flex gap-1 mt-4 button-container">
          {/* <button className="primary">Utforska kollektionen</button>
                    <button className="stroked hide-mobile">Hitta din närmaste butik</button> */}
          <Link href="/herr" className="button primary">
            Utforska kollektionen
          </Link>
          <Link href="/#hitta-hit" className="button stroked hide-mobile">
            Hitta din närmaste butik
          </Link>
          <a className="text-white hide-desktop" href="/#hitta-hit">
            Hitta din närmaste butik -&gt;
          </a>
        </div>
      </div>
      <div className="cw-col-6 cw-col-xs-12 empty-col"></div>
      <video src="/wacko_test_2.mp4" autoPlay playsInline loop muted></video>
    </section>
  )
}

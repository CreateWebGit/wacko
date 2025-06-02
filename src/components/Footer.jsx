export default function Footer() {
  return (
    <footer>
      <div className="top-container cw-grid">
        <div className="wacko-container cw-col-6 cw-col-xs-12">
          <img src="/img/wacko_logo_black.svg" />
          <div className="contact-container">
            <div className="item-title">Götgatan 35, 116 21 Stockholm</div>
            <div className="item-title">
              08-411 15 53 <br />
              <br />
            </div>
            <div className="item-title">
              MÅN - FRE: 11:00 &mdash; 18:00 <br />
              LÖR: 11:00 &mdash; 16:00 <br />
              SÖN: Stängt
            </div>
          </div>
        </div>
        <div className="link-container cw-col-6  cw-col-xs-12 cw-grid">
          <div className="footer-item cw-col-4 cw-col-xs-12">
            <div className="item-title">SIDKARTA</div>
            <ul className="item-list">
              <li className="item">
                <a href="">Kollektion</a>
              </li>
              <li className="item">
                <a href="">Nyheter</a>
              </li>
              <li className="item">
                <a href="">Om oss</a>
              </li>
              <li className="item">
                <a href="">Hitta hit</a>
              </li>
            </ul>
          </div>
          <div className="footer-item cw-col-4 cw-col-xs-12">
            <div className="item-title">SKINNKLÄDER</div>
            <ul className="item-list">
              <li className="item">
                <a href="">Herr</a>
              </li>
              <li className="item">
                <a href="">Dam</a>
              </li>
              <li className="item">
                <a href="">Jackor</a>
              </li>
              <li className="item">
                <a href="">Väskor</a>
              </li>
              <li className="item">
                <a href="">Handskar</a>
              </li>
              <li className="item">
                <a href="">Mössor</a>
              </li>
              <li className="item">
                <a href="">Accessoarer</a>
              </li>
            </ul>
          </div>
          <div className="footer-item cw-col-4 cw-col-xs-12">
            <div className="item-title">SOCIAL MEDIA</div>
            <ul className="item-list">
              <li className="item">
                <a href="">Facebook</a>
              </li>
              <li className="item">
                <a href="">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bottom-container">
        <div className="item-title">
          <div className="content">
            <div className="copyright-notice">&copy; WACKO 2025</div>
            <div className="createweb">
              <a href="https://createweb.se" target="_blank">
                Skapad av CreateWeb
              </a>
            </div>
            <div className="copyright-notice">Integritetspolicy</div>
          </div>
        </div>
      </div>
    </footer>
  )
}

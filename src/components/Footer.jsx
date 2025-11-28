'use client'

import { usePathname } from 'next/navigation'
import { getLocaleFromPathname, prefixPath } from '@/lib/locales'

export default function Footer() {
    const pathname = usePathname()
    const locale = getLocaleFromPathname(pathname || '/')
    const withLocale = (path) => prefixPath(locale, path)

    return (
        <footer>
            <div className="top-container cw-grid">
                <div className="wacko-container cw-col-6 cw-col-xs-12">
                    <img src="/img/wacko_logo_black.svg" alt="wacko logo" />
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
                                <a href={withLocale('/herr')}>Kollektion</a>
                            </li>
                            <li className="item">
                                <a href={withLocale('/nyheter')}>Nyheter</a>
                            </li>
                            <li className="item">
                                <a href={withLocale('/om-oss')}>Om oss</a>
                            </li>
                            <li className="item">
                                <a href={withLocale('/#hitta-hit')}>Hitta hit</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-item cw-col-4 cw-col-xs-12">
                        <div className="item-title">SKINNKLÄDER</div>
                        <ul className="item-list">
                            <li className="item">
                                <a href={withLocale('/herr')}>Herr</a>
                            </li>
                            <li className="item">
                                <a href={withLocale('/dam')}>Dam</a>
                            </li>
                            <li className="item">
                                <a href={withLocale('/vaskor')}>Väskor</a>
                            </li>
                            <li className="item">
                                <a href={withLocale('/vinterdetaljer')}>Vinterdetaljer</a>
                            </li>
                            <li className="item">
                                <a href={withLocale('/accessoarer')}>Accessoarer</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-item cw-col-4 cw-col-xs-12">
                        <div className="item-title">SOCIAL MEDIA</div>
                        <ul className="item-list">
                            <li className="item">
                                <a
                                    href="https://www.facebook.com/people/Wacko-Leather-Fashion/100091742045220/"
                                    target="_blank"
                                >
                                    Facebook
                                </a>
                            </li>
                            <li className="item">
                                <a href="https://www.instagram.com/wackoskinnmode/" target="_blank">
                                    Instagram
                                </a>
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

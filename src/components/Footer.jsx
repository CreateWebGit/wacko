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
                        <div className="item-title">{locale === 'sv' ? 'SIDKARTA' : 'SITE MAP'}</div>
                        <ul className="item-list">
                            <li className="item">
                                <a href={withLocale('/herr')}>{locale === 'sv' ? 'Kollektion' : 'Collection'}</a>
                            </li>
                            <li className="item">
                                <a href={withLocale('/nyheter')}>{locale === 'sv' ? 'Nyheter' : 'News'}</a>
                            </li>
                            <li className="item">
                                <a href={withLocale('/om-oss')}>{locale === 'sv' ? 'Om oss' : 'About us'}</a>
                            </li>
                            <li className="item">
                                <a href={withLocale('/#hitta-hit')}>{locale === 'sv' ? 'Hitta hit' : 'Find us'}</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-item cw-col-4 cw-col-xs-12">
                        <div className="item-title">{locale === 'sv' ? 'SKINNKLÄDER' : 'LEATHERWEAR'}</div>
                        <ul className="item-list">
                            <li className="item">
                                <a href={withLocale('/herr')}>{locale === 'sv' ? 'Herr' : 'Men'}</a>
                            </li>
                            <li className="item">
                                <a href={withLocale('/dam')}>{locale === 'sv' ? 'Dam' : 'Women'}</a>
                            </li>
                            <li className="item">
                                <a href={withLocale('/vaskor')}>{locale === 'sv' ? 'Väskor' : 'Bags'}</a>
                            </li>
                            <li className="item">
                                <a href={withLocale('/vinterdetaljer')}>{locale === 'sv' ? 'Vinterdetaljer' : 'Winter Details'}</a>
                            </li>
                            <li className="item">
                                <a href={withLocale('/accessoarer')}>{locale === 'sv' ? 'Accessoarer' : 'Accessories'}</a>
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
                        <div className="copyright-notice">&copy; WACKO 2026</div>
                        <div className="createweb">
                            <a href="https://createweb.se" target="_blank">
                                {locale === 'sv' ? 'Skapad av Createweb' : 'Made by Createweb'}
                            </a>
                        </div>
                        <div className="copyright-notice">{locale === 'sv' ? 'Integritetspolicy' : 'Privacy Policy'}</div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

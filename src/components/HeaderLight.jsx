'use client'

import { useState, useEffect, useRef } from 'react'
import NavLink from '@/components/NavLink'

export default function HeaderLight() {
  const [slideMenuOpen, setSlideMenuOpen] = useState(false)

  const headerRef = useRef()
  useEffect(() => {
    //hide header on scroll
    let prevScrollpos = window.scrollY
    const header = headerRef.current

    if (!header) return

    if (window.scrollY !== 0) {
      header.classList.add('scrolled')
      setThemeColor('#ffffff')
    }

    window.addEventListener('scroll', () => {
      const currentScrollPos = window.scrollY

      if (prevScrollpos <= currentScrollPos) {
        header.classList.add('scrolled')
        setThemeColor('#ffffff')
      } else {
        header.classList.remove('scrolled')
      }

      prevScrollpos = currentScrollPos
    })
  }, [])

  const [themeColor, setThemeColor] = useState('#8B645A')
  useEffect(() => {
    const metaTag = document.querySelector('meta[name="theme-color"]')
    if (metaTag) {
      metaTag.setAttribute('content', themeColor)
    }
  }, [themeColor])

  useEffect(() => {
    if (slideMenuOpen) {
      document.querySelector('html').style.overflow = 'hidden';
    } else {
      document.querySelector('html').removeAttribute('style');
    }
  }, [slideMenuOpen])

  const toggleSlideMenu = () => {
    let header = headerRef.current

    if (slideMenuOpen === false) {
      console.log('slidemenu opening')
      header.classList.add('slide_menu--open')
    }

    if (slideMenuOpen === true) {
      console.log('slidemenu closing')
      header.classList.remove('slide_menu--open')
    }
    setSlideMenuOpen((prev) => !prev)
  }

  return (
    <header ref={headerRef} className="light">
      <div className="header__top-container">
        <div className="header__logo-container pl-4">
          <NavLink className="image-link" href="/">
            <img src="/img/wacko_logo_black.svg"></img>
          </NavLink>
        </div>
        <div className="header__navigation">
          <ul>
            <li>
              <NavLink href="/herr">Kollektion</NavLink>
            </li>
            <li>
              <NavLink href="/nyheter">Nyheter</NavLink>
            </li>
            <li>
              <NavLink href="/om-oss">Om oss</NavLink>
            </li>
          </ul>
        </div>
        <div className="header__menu pr-4">
          {/* <button className="secondary sm hide-mobile">Hitta hit</button> */}
          <a href="/#hitta-hit" className="button dark sm hide-mobile">Hitta hit</a>
          <div
            onClick={() => toggleSlideMenu()}
            className={`button-container hide-desktop ${slideMenuOpen ? 'open' : ''}`}
          >
            <div className="first">MENY</div>
            <div className="second">STÄNG</div>
          </div>
        </div>
      </div>
      <div className="header__bottom-container">
        <ul>
          <li>
            <NavLink href="/herr">Herr</NavLink>
          </li>
          <li>
            <NavLink href="/dam">Dam</NavLink>
          </li>

          <li>
            <NavLink href="/vaskor">Väskor</NavLink>
          </li>
          <li>
            <NavLink href="/mossor">Mössor</NavLink>
          </li>
          <li className="hide-mobile">
            <NavLink href="/handskar">Handskar</NavLink>
          </li>
          <li>
            <NavLink href="/accessoarer">Accessoarer</NavLink>
          </li>
        </ul>
      </div>
      <div className={`header__slide_menu ${slideMenuOpen ? 'open' : ''}`}>
        <div className="link-container">
          <ul>
            <li>
              <NavLink href="/herr">Kollektion</NavLink>
            </li>
            <li>
              <NavLink href="/nyheter">Nyheter</NavLink>
            </li>
            <li>
              <NavLink href="/om-oss">Om oss</NavLink>
            </li>
          </ul>
        </div>
        <div className="sublink-container">
          <ul>
          <li>
            <NavLink href="/herr">Herr</NavLink>
          </li>
          <li>
            <NavLink href="/dam">Dam</NavLink>
          </li>
          <li>
            <NavLink href="/vaskor">Väskor</NavLink>
          </li>
          <li>
            <NavLink href="/mossor">Mössor</NavLink>
          </li>
          <li className="hide-mobile">
            <NavLink href="/handskar">Handskar</NavLink>
          </li>
          <li>
            <NavLink href="/accessoarer">Accessoarer</NavLink>
          </li>
        </ul>
        </div>
        <div className="button-container">
          <a onClick={toggleSlideMenu} href="/#hitta-hit" className="button full-width primary">Hitta hit</a>
        </div>
      </div>
    </header>
  )
}

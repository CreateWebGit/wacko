'use client'

import { useState, useEffect, useRef } from 'react'
import NavLink from '@/components/NavLink'

export default function Header() {
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
      header.classList.remove('at-top')
    }

    window.addEventListener('scroll', () => {
      const currentScrollPos = window.scrollY

      if (window.scrollY === 0) {
        header.classList.add('at-top')
        setThemeColor('#8B645A')
      } else {
        header.classList.remove('at-top')
      }

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

  const toggleSlideMenu = () => {
    let header = headerRef.current

    if (slideMenuOpen === false) {
      console.log('slidemenu opening')
      header.classList.add('slide_menu--open')
    }

    if (slideMenuOpen === true) {
      console.log('slidemenu closing')
      header.classList.remove('slide_menu--open')

      if (window.scrollY !== 0) {
        header.classList.add('scrolled')
      } else {
        header.classList.add('at-top')
      }
    }
    setSlideMenuOpen((prev) => !prev)
  }

  return (
    <header ref={headerRef} className="at-top">
      <div className="header__top-container">
        <div className="header__logo-container pl-4">
          <NavLink className="image-link" href="/">
            <img src="img/wacko_logo_black.svg"></img>
          </NavLink>
        </div>
        <div className="header__navigation">
          <ul>
            <li>
              <NavLink href="/kollektion">Kollektion</NavLink>
            </li>
            <li>
              <NavLink href="/skotselrad">Skötselråd</NavLink>
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
          <button className="secondary sm hide-mobile">Hitta hit</button>
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
            <NavLink href="/barn">Barn</NavLink>
          </li>
          <li>
            <NavLink href="/vaskor">Väskor</NavLink>
          </li>
          <li className="hide-mobile">
            <NavLink href="/handskar">Handskar</NavLink>
          </li>
          <li>
            <NavLink href="/accessoarer">Accessoarer</NavLink>
          </li>
        </ul>
      </div>
      <div className={`header__slide_menu ${slideMenuOpen ? 'open' : ''}`}></div>
    </header>
  )
}

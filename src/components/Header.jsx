'use client'

import { useState, useEffect, useRef } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import NavLink from '@/components/NavLink'
import { MagnifyingGlassIcon } from '@phosphor-icons/react/dist/csr/MagnifyingGlass'
import { getLocaleFromPathname, prefixPath } from '@/lib/locales'

export default function Header({ lightHeader = false }) {
    const router = useRouter()
    const pathname = usePathname()
    const locale = getLocaleFromPathname(pathname || '/')
    const withLocale = (path) => prefixPath(locale, path)
    const [slideMenuOpen, setSlideMenuOpen] = useState(false)
    const [searchOpen, setSearchOpen] = useState(false)
    const [searchValue, setSearchValue] = useState('')

    const headerRef = useRef()
    const searchInputRef = useRef()
    useEffect(() => {
        //hide header on scroll
        let prevScrollpos = window.scrollY
        const header = headerRef.current

        if (!header) return

        if (window.scrollY !== 0) {
            header.classList.add('scrolled')
            setThemeColor('#ffffff')
            if (lightHeader === false) header.classList.remove('at-top')
        }

        window.addEventListener('scroll', () => {
            const currentScrollPos = window.scrollY

            if (window.scrollY === 0) {
                if (lightHeader === false) header.classList.add('at-top')
                setThemeColor('#8B645A')
            } else {
                if (lightHeader === false) header.classList.remove('at-top')
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

    useEffect(() => {
        if (searchOpen) {
            searchInputRef.current?.focus()
        }
    }, [searchOpen])

    useEffect(() => {
        if (slideMenuOpen) {
            document.querySelector('html').style.overflow = 'hidden'
        } else {
            document.querySelector('html').removeAttribute('style')
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

            if (window.scrollY !== 0) {
                header.classList.add('scrolled')
            } else {
                if (lightHeader === false) header.classList.add('at-top')
            }
        }
        setSlideMenuOpen((prev) => !prev)
    }

    const handleSearchSubmit = (event) => {
        event.preventDefault()
        const trimmedQuery = searchValue.trim()
        if (!trimmedQuery) return
        router.push(withLocale(`/sok/${encodeURIComponent(trimmedQuery)}`))
        setSearchValue('')
        setSearchOpen(false)
    }

    const toggleSearch = () => {
        setSearchOpen((prev) => {
            if (prev) {
                setSearchValue('')
            }
            return !prev
        })
    }

    return (
        <header ref={headerRef} className={lightHeader || searchOpen ? 'header-light' : 'at-top'}>
            <div className="header__top-container">
                <div className="header__logo-container pl-4">
                    <NavLink className="image-link" href={withLocale('/')}>
                        <img src="/img/wacko_logo_black.svg" alt="wacko logo"></img>
                    </NavLink>
                </div>
                <div className="header__navigation">
                    {searchOpen ? (
                        <form className="header__search-form" onSubmit={handleSearchSubmit}>
                            <input
                                ref={searchInputRef}
                                type="text"
                                value={searchValue}
                                onChange={(event) => setSearchValue(event.target.value)}
                                placeholder="Sök produkter eller kategorier"
                                aria-label="Sök"
                            />
                            <button type="submit" className="button dark sm">
                                Sök
                            </button>
                        </form>
                    ) : (
                        <ul>
                            <li>
                                <NavLink href={withLocale('/herr')}>
                                    {locale === 'sv' ? 'Kollektion' : 'Collection'}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink href={withLocale('/nyheter')}>
                                    {locale === 'sv' ? 'Nyheter' : 'News'}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink href={withLocale('/om-oss')}>
                                    {locale === 'sv' ? 'Om oss' : 'About us'}
                                </NavLink>
                            </li>
                        </ul>
                    )}
                </div>
                <div className="header__menu pr-4">
                    <div className={`header__search ${searchOpen ? 'open' : ''}`}>
                        <button type="button" className="sm icon-button" onClick={toggleSearch}>
                            <MagnifyingGlassIcon size={20} />
                        </button>
                    </div>
                    <a href={withLocale('/#hitta-hit')} className="button dark sm hide-mobile">
                        {locale === 'sv' ? 'Hitta hit' : 'Find us'}
                    </a>
                    <div
                        onClick={() => toggleSlideMenu()}
                        className={`button-container hide-desktop ${slideMenuOpen ? 'open' : ''}`}
                    >
                        <div className="first">{locale === 'sv' ? 'MENY' : 'MENU'}</div>
                        <div className="second">{locale === 'sv' ? 'STÄNG' : 'CLOSE'}</div>
                    </div>
                </div>
            </div>
            <div className="header__bottom-container">
                <ul>
                    <li>
                        <NavLink href={withLocale('/herr')}>
                            {locale === 'sv' ? 'Herr' : 'Men'}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink href={withLocale('/dam')}>
                            {locale === 'sv' ? 'Dam' : 'Women'}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink href={withLocale('/vinterdetaljer')}>
                            {locale === 'sv' ? 'Vinterdetaljer' : 'Winter Details'}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink href={withLocale('/vaskor')}>
                            {locale === 'sv' ? 'Väskor' : 'Bags'}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink href={withLocale('/accessoarer')}>
                            {locale === 'sv' ? 'Accessoarer' : 'Accessories'}
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className={`header__slide_menu ${slideMenuOpen ? 'open' : ''}`}>
                <div className="search-container">
                    <form className="header__search-form" onSubmit={handleSearchSubmit}>
                        <MagnifyingGlassIcon size={24} />
                        <input
                            ref={searchInputRef}
                            type="text"
                            value={searchValue}
                            onChange={(event) => setSearchValue(event.target.value)}
                            placeholder={locale === 'sv' ? 'Sök' : 'Search...'}
                            aria-label="Sök"
                        />
                        <button type="submit" className="button sm">
                            {locale === 'sv' ? 'Sök' : 'Search'}
                        </button>
                    </form>
                </div>
                <div className="link-container">
                    <ul>
                        <li>
                            <NavLink href={withLocale('/herr')}>
                                {locale === 'sv' ? 'Kollektion' : 'Collection'}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink href={withLocale('/nyheter')}>
                                {locale === 'sv' ? 'Nyheter' : 'News'}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink href={withLocale('/om-oss')}>
                                {locale === 'sv' ? 'Om oss' : 'About us'}
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="sublink-container">
                    <ul>
                        <li>
                            <NavLink href={withLocale('/herr')}>
                                {locale === 'sv' ? 'Herr' : 'Men'}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink href={withLocale('/dam')}>
                                {locale === 'sv' ? 'Dam' : 'Women'}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink href={withLocale('/vinterdetaljer')}>
                                {locale === 'sv' ? 'Vinterdetaljer' : 'Winter Details'}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink href={withLocale('/vaskor')}>
                                {locale === 'sv' ? 'Väskor' : 'Bags'}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink href={withLocale('/accessoarer')}>
                                {locale === 'sv' ? 'Accessoarer' : 'Accessories'}
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div className="button-container">
                    <a
                        onClick={toggleSlideMenu}
                        href={withLocale('/#hitta-hit')}
                        className="button full-width primary"
                    >
                        {locale === 'sv' ? 'Hitta hit' : 'Find us'}
                    </a>
                </div>
            </div>
        </header>
    )
}

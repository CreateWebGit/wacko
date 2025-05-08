"use client"

import { useEffect, useRef } from "react"

export default function Header() {
    const headerRef = useRef()
    useEffect(() => {
            //hide header on scroll
            let prevScrollpos = window.scrollY;
            const header = headerRef.current;
    
            if (!header) return;
    
            window.addEventListener('scroll', () => {
                const currentScrollPos = window.scrollY;

                if (window.scrollY === 0) {
                    header.classList.add('at-top')
                } else {
                    header.classList.remove('at-top')
                }
    
                if ((prevScrollpos ) <= currentScrollPos) {
                    header.classList.add("scrolled");
                } else {  
                    header.classList.remove("scrolled")
                }
                

    
                prevScrollpos = currentScrollPos;
            })
        }, []);

    return (
        <header ref={headerRef} className="at-top">
            <div className="header__top-container">
                <div className="header__logo-container">
                    <img src="img/wacko_logo_black.svg"></img>
                </div>
                <div className="header__navigation">
                    <ul>
                        <li>Kollektion</li>
                        <li>Skötselråd</li>
                        <li>Nyheter</li>
                        <li>Om oss</li>
                    </ul>
                </div>
                <div className="header__menu"></div>
            </div>
            <div className="header__bottom-container">
                <ul>
                    <li>Jackor</li>
                    <li>Herr</li>
                    <li>Dam</li>
                    <li>Barn</li>
                    <li>Väskor</li>
                    <li>Handskar</li>
                    <li>Accessoarer</li>
                </ul>   
            </div>
        </header>
    )
}
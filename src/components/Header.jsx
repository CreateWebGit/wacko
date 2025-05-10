"use client"

import Link from "next/link";
import { useEffect, useRef } from "react"

export default function Header() {
    const headerRef = useRef()
    useEffect(() => {
            //hide header on scroll
            let prevScrollpos = window.scrollY;
            const header = headerRef.current;

            if (window.scrollY !== 0) {
                header.classList.add('scrolled')
                header.classList.remove('at-top')
            }
    
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
                <div className="header__logo-container pl-4">
                    <Link className="image-link" href="/">
                        <img src="img/wacko_logo_black.svg"></img>
                    </Link>
                </div>
                <div className="header__navigation">
                    <ul>
                        <li>
                            <Link href="/kollektion">Kollektion</Link>
                        </li>
                        <li>
                            <Link href="/skotselrad">Skötselråd</Link>
                        </li>
                        <li>
                            <Link href="/nyheter">Nyheter</Link>
                        </li>
                        <li>
                            <Link href="/om-oss">Om oss</Link>
                        </li>
                    </ul>
                </div>
                <div className="header__menu pr-4">
                    <button className="secondary sm">Hitta hit</button>
                </div>
            </div>
            <div className="header__bottom-container">
                <ul>
                    <li>
                        <Link href="/herr">Herr</Link>
                    </li>
                    <li>
                        <Link href="/dam">Dam</Link>
                    </li>
                    <li>
                        <Link href="/barn">Barn</Link>
                    </li>
                    <li>
                        <Link href="/vaskor">Väskor</Link>
                    </li>
                    <li>
                        <Link href="/handskar">Handskar</Link>
                    </li>
                    <li>
                        <Link href="/accessoarer">Accessoarer</Link>
                    </li>
                </ul>   
            </div>
        </header>
    )
}
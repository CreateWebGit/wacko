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
    
                if (prevScrollpos <= currentScrollPos ){
                    header.classList.add("scrolled");
                } else{  
                    header.classList.remove("scrolled")
                }
                if (window.scrollY === 0) {
                    header.classList.add('at-top')
                } else {
                    header.classList.remove('at-top')
                }

    
                prevScrollpos = currentScrollPos;
            })
        }, []);

    return (
        <header ref={headerRef} className="at-top">
            <div className="header__top-container"></div>
            <div className="header__bottom-container"></div>
        </header>
    )
}
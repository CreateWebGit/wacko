"use client"

import { useEffect } from "react";
import Image from 'next/image'

export default function AboutSticky() {
    useEffect(() => {
        const items = document.querySelectorAll(".timeline-item");
        const yearTexts = document.querySelectorAll(".year-text");

        if (!items.length) return;

        // Explicit map: timeline ID suffix → year-text content
        const idToLabelMap = {
            "1978": "1978",
            "1982": "1982",
            "1986": "1986",
            "1987": "1987",
            "1990": "Tidigt 90-tal",
            "1999": "1999",
            "nutid": "Nutid",
        };

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
                        const id = entry.target.id.split("-")[1].toLowerCase();
                        const labelToActivate = idToLabelMap[id];

                        yearTexts.forEach((el) => {
                            el.classList.toggle("active", el.textContent === labelToActivate);
                        });
                    }
                });
            },
            {
                threshold: 0.5,
                root: null, // use window scroll
            }
        );

        items.forEach((item) => observer.observe(item));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="cw-section--aboutsticky cw-grid full-width">
            <div className="sticky-container cw-col-5">
                <h1 className="h3">Fyrtio år av form, funktion och förtroende</h1>
                <p className="mt-1">Sedan starten på 80-talet har Wacko vuxit från ett litet skrädderi till ett etablerat namn inom svenskt skinnmode. Genom tid, trender och teknik har vi behållit vårt fokus: kompromisslös kvalitet, äkta material och stil som håller över tid. Följ vår utveckling – från första butiken till nästa digitala kapitel.</p>
                <div className="timeline-year-container mt-3">
                    <div className="year-text">1978</div>
                    <div className="year-text">1982</div>
                    <div className="year-text">1986</div>
                    <div className="year-text">1987</div>
                    <div className="year-text">Tidigt 90-tal</div>
                    <div className="year-text">1999</div>
                    <div className="year-text">Nutid</div>
                </div>            
            </div>
            <div className="timeline-container cw-col-7">
                <div id="timeline-1978" className="timeline-item">
                    <div className="timeline-image">
                        <Image src="/img/wacko_timeline_1978.jpg" width="802" height="327" alt=""/>
                    </div>
                    <h1 className="h3">En ny början i ett nytt land</h1>
                    <p>Abdo anländer till Sverige, driven av en vilja att skapa något eget. Men vägen dit är inte spikrak. De första tre åren präglas av väntan &mdash; på arbetstillstånd, på möjligheter, på att få börja bygga sitt liv på riktigt. 
                    <br/> <br/>Trots utmaningarna tappar han aldrig riktningen. Istället börjar han planera. Tyst men målmedvetet.</p>
                </div>
                <div id="timeline-1982" className="timeline-item">
                    <div className="timeline-image">
                        <Image src="/img/wacko_timeline_1982.jpg" width="802" height="327" alt=""/>
                    </div>
                    <h1 className="h3">Första skrädderiet på Tegnérgatan</h1>
                    <p>
                        Med arbetstillståndet i handen öppnar Abdo sitt första skrädderi i en liten lokal på Tegnérgatan. Det är blygsamt, men varje meter är fylld av ambition. 
                        <br/><br/>
                        Här syr han upp kostymer, lagar plagg, bygger relationer. Kunderna uppskattar inte bara hans hantverk, utan också hans noggrannhet och ärlighet. Under tio år formas inte bara kläder – utan ett rykte.
                    </p>
                </div>
                <div id="timeline-1986" className="timeline-item">
                    <div className="timeline-image">
                        <Image src="/img/wacko_timeline_1986.jpg" width="802" height="327" alt=""/>
                    </div>
                    <h1 className="h3">Från skräddare till designer</h1>
                    <p>
                        Efter flera år av kundarbete börjar Abdo designa egna jackor. Han inspireras av modeller från Istanbul – djärva snitt, ovanliga materialval och en annan typ av attityd. Många tycker de är svårsålda, för annorlunda. Men Abdo ser potentialen. Han vet hur man presenterar dem rätt. För honom är försäljning inte bara en affär – det är en konstform.</p>
                </div>
                <div id="timeline-1987" className="timeline-item">
                    <div className="timeline-image">
                        <Image src="/img/wacko_timeline_1987.jpg" width="802" height="327" alt=""/>
                    </div>
                    <h1 className="h3">Första butiken på Drottninggatan</h1>
                    <p>
                        Det stora genombrottet kommer när Abdo öppnar sin första butik – mitt på Drottninggatan. Han märker snabbt att han har en känsla för mer än bara design: han är också en naturlig säljare. Skinnet, som andra tyckte var svårt att jobba med, blev hans signatur. Snart hittar både kändisar och politiker till butiken. Det personliga bemötandet, det ärliga hantverket och den höga kvaliteten talar sitt tydliga språk.</p>
                </div>
                <div id="timeline-1990" className="timeline-item">
                    <div className="timeline-image">
                        <Image src="/img/wacko_timeline_90s.jpg" width="802" height="327" alt=""/>
                    </div>
                    <h1 className="h3">Expansion till Gamla Brogatan</h1>
                    <p>
                        Med växande efterfrågan tar Wacko steget vidare till Gamla Brogatan. Här fortsätter Abdo att bygga vidare på sitt varumärke. Fler jackor, fler kunder, samma kompromisslösa kvalitet. Det handlar inte längre bara om att sälja plagg – det handlar om att skapa förtroende och lojalitet. Ett besök hos Wacko är alltid mer än bara ett köp.</p>
                </div>
                <div id="timeline-1999" className="timeline-item">
                    <div className="timeline-image">
                        <Image src="/img/wacko_timeline_1999.jpg" width="802" height="327" alt=""/>
                    </div>
                    <h1 className="h3">Wacko öppnar i Jakobsbergs Galleria</h1>
                    <p>
                        Nu är det dags att nå utanför innerstan. En ny butik öppnas i Jakobsbergs Galleria, och Wackos signum – hantverk, skinn och personlig service – möter en ny publik. Kunderna kommer från hela länet, många återvänder gång på gång. För Abdo är det aldrig kvantitet framför kvalitet – varje jacka ska kännas rätt, varje kund bemötas med respekt.</p>
                </div>
                <div id="timeline-nutid" className="timeline-item">
                    <div className="timeline-image">
                        <Image src="/img/wacko_timeline_now.jpg" width="802" height="327" alt=""/>
                    </div>
                    <h1 className="h3">En stilresa genom fyra decennier</h1>
                    <p>
                        Från en liten butik i Stockholm till ett namn som förknippas med kvalitet och karaktär. Wacko har sedan 80-talet levererat skinnjackor, väskor och accessoarer som kombinerar hantverk med hållbar design. Vår resa handlar inte bara om mode – den handlar om förtroende, form och en kärlek till skinn som aldrig går ur tiden.</p>
                </div>
            </div>
        </section>
    )
}
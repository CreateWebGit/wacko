import Link from 'next/link'
import Header from '@/components/Header'
 
export default function NotFound() {
    return (
        <div className="error-wrapper">
            <Header/>
            <div className="container">
                <h1>Håll i hatten! Vi bygger om!</h1>
                <p className="mt-2">
                    Vår hemsida får just nu en uppfräschning – lite som att lägga ny glans på en läderjacka. Snart är vi tillbaka, snyggare och vassare än någonsin! Men du kan fortfarande besöka oss i butiken på Götgatan 35 i Stockholm. Sväng förbi, prova en jacka eller bara säg hej. Vi lovar att hålla stilen intakt även offline.
                </p>
                <div className="d-flex gap-1 mt-5">
                    <Link className="button primary fixed-width" href="https://maps.app.goo.gl/ZNUQXJcHtTA9vpfA7" target='_blank'>
                        Visa på Google Maps
                    </Link>
                    <Link className="button stroked fixed-width" href="/">
                        Tillbaka hem
                    </Link>
                </div>
            </div>
        </div>
    )
}
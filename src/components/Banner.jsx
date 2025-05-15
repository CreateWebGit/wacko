import Link from "next/link"

export default function Banner() {
    return (
        <div className="banner">
            Ursäkta röran – vi ger sajten en ny look! <br className="hide-desktop"/>Butiken är öppen som vanligt. <Link className="light ml-1" href="https://maps.app.goo.gl/ZNUQXJcHtTA9vpfA7" target="_blank">Välkommen in!</Link>
        </div>
    )
}
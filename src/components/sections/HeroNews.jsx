export default function SectionHeroNews({ locale }) {
    return (
        <section className="cw-section--heroNews cw-grid py-2">
            <div className="cw-col-12 cw-col-xs-12 cw-c-justify-center cw-flex-column">
                <h1 className="text-center-xs">{locale === 'sv' ? 'Nyheter' : 'News'}</h1>
            </div>
            <hr className="cw-col-12 mt-3"/>
        </section>
    )
}
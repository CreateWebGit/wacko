export const SUBCATEGORY_LABELS = {
    sv: {
        // herr
        jackor: 'Jackor',
        skinnväst: 'Skinnväst',
        skinnbyxor: 'Skinnbyxor',
        handskar: 'Handskar',
        bälten: 'Bälten',
        plånböcker: 'Plånböcker',
        hattar: 'Hattar',
        kepsar: 'Kepsar',

        // dam
        västar: 'Västar',

        // accessoarer
        halsdukar: 'Halsdukar',
        necessar: 'Necessär',
        nyckelfodral: 'Nyckelfodral',
        korthållare: 'Korthållare',
        tofflor: 'Tofflor',

        // vinterdetaljer
        mössor: 'Mössor',

        // väskor
        handväskor: 'Handväskor',
        resväskor: 'Resväskor',
        ryggväskor: 'Ryggväskor',
        weekendväskor: 'Weekendväskor',
        magväskor: 'Magväskor'
    },
    en: {
        // herr
        jackor: 'Jackets',
        skinnväst: 'Leather vest',
        skinnbyxor: 'Leather pants',
        handskar: 'Gloves',
        bälten: 'Belts',
        plånböcker: 'Wallets',
        hattar: 'Hats',
        kepsar: 'Caps',

        // dam
        västar: 'Vests',

        // accessoarer
        halsdukar: 'Scarves',
        necessar: 'Toiletry bag',
        nyckelfodral: 'Key case',
        korthållare: 'Card holder',
        tofflor: 'Slippers',

        // vinterdetaljer
        mössor: 'Beanies',

        // väskor
        handväskor: 'Handbags',
        resväskor: 'Suitcases',
        ryggväskor: 'Backpacks',
        weekendväskor: 'Weekend bags',
        magväskor: 'Belt bags'
    }
}

export function tSubcategory(value, locale) {
    const dict = SUBCATEGORY_LABELS[locale] || SUBCATEGORY_LABELS.sv
    return dict[value] || value // fallback: show raw value if missing
}

export function tUI(key, locale) {
    const dict = {
        sv: {
            all: 'Alla',
            products: (n) => `${n} produkter`,
            readMore: 'Läs mer',
            readLess: 'Läs mindre'
        },
        en: {
            all: 'All',
            products: (n) => `${n} products`,
            readMore: 'Read more',
            readLess: 'Read less'
        }
    }
    const d = dict[locale] || dict.sv
    return d[key]
}

import type { GlobalConfig } from 'payload'

export const Pages: GlobalConfig = {
    slug: 'pages',
    label: 'Sidor',
    access: {
        read: () => true,
        update: ({ req }) => Boolean(req.user)
    },
    fields: [
        {
            type: 'tabs',
            tabs: [
                // =========================
                // START (INDEX)
                // =========================
                {
                    label: 'Start',
                    fields: [
                        {
                            name: 'indexPage',
                            type: 'group',
                            label: 'Start',
                            fields: [
                                // Hero
                                {
                                    name: 'hero',
                                    type: 'group',
                                    label: 'Hero',
                                    fields: [
                                        {
                                            name: 'title',
                                            type: 'text',
                                            label: 'Rubrik',
                                            localized: true
                                        },
                                        {
                                            name: 'subtitle',
                                            type: 'textarea',
                                            label: 'Ingress',
                                            localized: true
                                        },
                                        {
                                            name: 'ctas',
                                            type: 'array',
                                            label: 'Knappar',
                                            labels: { plural: 'Knappar', singular: 'Knapp' },
                                            fields: [
                                                {
                                                    label: 'Text',
                                                    name: 'text',
                                                    type: 'text',
                                                    localized: true
                                                },
                                                { label: 'Länk', name: 'href', type: 'text' }
                                            ],
                                            maxRows: 2
                                        }
                                    ]
                                },

                                // Två butiker – intro
                                {
                                    name: 'twoStores',
                                    type: 'group',
                                    label: '[Sektion] "En butik. En passion för skinn."',
                                    fields: [
                                        {
                                            name: 'heading',
                                            type: 'text',
                                            label: 'Rubrik',
                                            localized: true
                                        },
                                        {
                                            name: 'body',
                                            type: 'textarea',
                                            label: 'Brödtext',
                                            localized: true
                                        },
                                        {
                                            name: 'link',
                                            type: 'array',
                                            label: 'Länk',
                                            labels: { plural: 'Länkar', singular: 'Länk' },
                                            fields: [
                                                {
                                                    label: 'Text',
                                                    name: 'text',
                                                    type: 'text',
                                                    localized: true
                                                },
                                                { label: 'Länk', name: 'href', type: 'text' }
                                            ],
                                            maxRows: 1
                                        }
                                    ]
                                },

                                // Skinn som åldras
                                {
                                    name: 'agingLeather',
                                    type: 'group',
                                    label: '[Sektion] "Skinn som åldras"',
                                    fields: [
                                        {
                                            name: 'heading',
                                            type: 'text',
                                            label: 'Rubrik',
                                            localized: true
                                        },
                                        {
                                            name: 'body',
                                            type: 'textarea',
                                            label: 'Brödtext',
                                            localized: true
                                        },
                                        {
                                            name: 'link',
                                            type: 'array',
                                            label: 'Länk',
                                            labels: { plural: 'Länkar', singular: 'Länk' },
                                            fields: [
                                                {
                                                    label: 'Text',
                                                    name: 'text',
                                                    type: 'text',
                                                    localized: true
                                                },
                                                { label: 'Länk', name: 'href', type: 'text' }
                                            ],
                                            maxRows: 1
                                        }
                                    ]
                                },

                                // Våra butiker
                                {
                                    name: 'store',
                                    type: 'group',
                                    label: '[Sektion] Våran butik',
                                    fields: [
                                        {
                                            name: 'opening-hours',
                                            type: 'text',
                                            label: 'Öppettider',
                                            localized: true
                                        }
                                    ]
                                }

                                // SEO (Start)
                                /*
                                {
                                    name: 'seo',
                                    type: 'group',
                                    label: 'SEO (Start)',
                                    fields: [
                                        { name: 'title', type: 'text', label: 'SEO-titel' },
                                        {
                                            name: 'description',
                                            type: 'textarea',
                                            label: 'Meta-beskrivning',
                                            maxLength: 160
                                        }
                                    ]
                                }
                                */
                            ]
                        }
                    ]
                },

                // =========================
                // OM OSS
                // =========================
                {
                    label: 'Om oss',
                    fields: [
                        {
                            name: 'aboutPage',
                            type: 'group',
                            label: 'Om oss',
                            fields: [
                                // Hero
                                {
                                    name: 'hero',
                                    type: 'group',
                                    label: 'Hero',
                                    fields: [
                                        {
                                            name: 'title',
                                            type: 'text',
                                            label: 'Rubrik',
                                            localized: true
                                        },
                                        {
                                            name: 'subtitle',
                                            type: 'textarea',
                                            label: 'Ingress',
                                            localized: true
                                        }
                                    ]
                                },

                                // Introblock (Fyrtio år ...)
                                {
                                    name: 'introBlock',
                                    type: 'group',
                                    label: 'Introblock',
                                    fields: [
                                        {
                                            name: 'heading',
                                            type: 'text',
                                            label: 'Rubrik',
                                            localized: true
                                        },
                                        {
                                            name: 'body',
                                            type: 'textarea',
                                            label: 'Brödtext',
                                            localized: true
                                        }
                                    ]
                                },

                                // Tidslinje
                                {
                                    name: 'timeline',
                                    type: 'array',
                                    label: 'Tidslinje',
                                    labels: { singular: 'År', plural: 'År' },
                                    fields: [
                                        {
                                            name: 'year',
                                            type: 'text',
                                            label: 'Årtal/Etapp (t.ex. 1978, 1982, “Tidigt 90-tal”, “Nutid”)',
                                            localized: true
                                        },
                                        {
                                            name: 'title',
                                            type: 'text',
                                            label: 'Titel',
                                            localized: true
                                        },
                                        {
                                            name: 'body',
                                            type: 'textarea',
                                            label: 'Brödtext',
                                            localized: true
                                        },
                                        {
                                            name: 'image',
                                            type: 'upload',
                                            relationTo: 'media',
                                            label: 'Bild'
                                        }
                                    ]
                                }

                                // SEO (Om oss)
                                /*
                                {
                                    name: 'seo',
                                    type: 'group',
                                    label: 'SEO (Om oss)',
                                    fields: [
                                        { name: 'title', type: 'text', label: 'SEO-titel' },
                                        {
                                            name: 'description',
                                            type: 'textarea',
                                            label: 'Meta-beskrivning',
                                            maxLength: 160
                                        }
                                    ]
                                }
                                */
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}

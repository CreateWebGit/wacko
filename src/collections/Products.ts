import type { CollectionConfig } from 'payload'

export const Products: CollectionConfig = {
    slug: 'products',
    labels: {
        plural: 'Produkter',
        singular: 'Produkt'
    },
    fields: [
        {
            name: 'title',
            label: 'Titel',
            type: 'text',
            required: true,
            localized: true
        },
        {
            name: 'price',
            label: 'Pris',
            type: 'text',
            required: true
        },
        {
            name: 'articleNumber',
            label: 'Artikelnummer',
            type: 'text',
            required: true
        },
        {
            name: 'categories',
            label: 'Kategorier',
            type: 'select',
            hasMany: false,
            localized: true,
            admin: {
                isClearable: true,
                isSortable: true
            },
            options: [
                {
                    label: 'Herr',
                    value: 'herr'
                },
                {
                    label: 'Dam',
                    value: 'dam'
                },
                {
                    label: 'Väskor',
                    value: 'vaskor'
                },
                {
                    label: 'Vinterdetaljer',
                    value: 'vinterdetaljer'
                },
                {
                    label: 'Accessoarer',
                    value: 'accessoarer'
                }
            ]
        },
        {
            name: 'subCategory',
            label: 'Underkategori',
            type: 'text',
            admin: {
                components: {
                    Field: '/fields/DynamicSubcategory.tsx'
                }
            }
        },
        {
            name: 'metaDescription',
            label: 'Produktbeskrivning',
            type: 'textarea',
            required: true,
            localized: true
        },
        {
            name: 'images',
            label: 'Bilder',
            type: 'upload',
            relationTo: 'media',
            required: true,
            hasMany: true
        }
    ],
    admin: {
        listSearchableFields: ['title', 'categories']
    }
}

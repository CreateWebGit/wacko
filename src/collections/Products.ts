import type { CollectionConfig } from 'payload'

export const Products: CollectionConfig = {
  slug: 'products',
  labels: {
    plural: 'Produkter',
    singular: 'Produkt',
  },

  fields: [
    {
      name: 'title',
      label: 'titel',
      type: 'text',
      required: true,
    },
    {
      name: 'categories',
      label: 'Kategorier',
      type: 'select', // required
      hasMany: true,
      localized: true,
      admin: {
        isClearable: true,
        isSortable: true, // use mouse to drag and drop different values, and sort them according to your choice
      },
      options: [
        {
          label: {
            eng: 'Skinnnjackets',
            sve: 'Skinnjacka',
          },
          value: 'skinnjacka',
        },
      ],
    },
    {
      name: 'metaDescription',
      label: 'Broduktbeskrivning',
      type: 'textarea',
      required: true,
      localized: true,
    },
    {
      name: 'images',
      type: 'upload',
      relationTo: 'media',
      required: true,
      hasMany: true,
    },
  ],
}

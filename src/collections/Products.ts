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
      label: 'Titel',
      type: 'text',
      required: true,
    },
    {
      name: 'price',
      label: 'Pris',
      type: 'text',
      required: true,
    },
    {
      name: 'categories',
      label: 'Kategorier',
      type: 'select', // required
      hasMany: false,
      localized: true,
      admin: {
        isClearable: true,
        isSortable: true, // use mouse to drag and drop different values, and sort them according to your choice
      },
      options: [
        {
          label: 'Herr',
          value: 'herr',
        },
        {
          label: 'Dam',
          value: 'dam',
        },
        {
          label: 'Väskor',
          value: 'vaskor',
        },
        {
          label: 'Handskar',
          value: 'handskar',
        },
        {
          label: 'Accessoarer',
          value: 'accessoarer',
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
      label: 'Bilder',
      type: 'upload',
      relationTo: 'media',
      required: true,
      hasMany: true,
    },
  ],
}

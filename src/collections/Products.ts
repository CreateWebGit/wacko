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
      name: 'articleNumber',
      label: 'Artikel nummer',
      type: 'text',
      required: true,
    },
    {
      name: 'categories',
      label: 'Kategorier',
      type: 'select',
      hasMany: false,
      localized: true,
      admin: {
        isClearable: true,
        isSortable: true,
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
          label: 'Mössor',
          value: 'mossor',
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
      name: 'herrcategories',
      label: 'Under kategorier',
      type: 'select',
      hasMany: false,
      localized: true,
      admin: {
        isClearable: true,
        isSortable: true,
        condition: (data, siblingData, { blockData, path, user }) => {
          if (data.categories === 'herr') {
            return true
          } else {
            return false
          }
        },
      },
      options: [
        {
          label: 'Jackor',
          value: 'jackor',
        },
        {
          label: 'Skinnväst',
          value: 'skinnväst',
        },
        {
          label: 'Skinnbyxor',
          value: 'skinnbyxor',
        },
        {
          label: 'Handskar',
          value: 'handskar',
        },
        {
          label: 'Bälten',
          value: 'bälten',
        },
        {
          label: 'Plånböcker',
          value: 'plånböcker',
        },
        {
          label: 'Hattar',
          value: 'hattar',
        },
        {
          label: 'Kepsar',
          value: 'kepsar',
        },
        {
          label: 'Mössor',
          value: 'mössor',
        },
      ],
    },
    {
      name: 'damcategories',
      label: 'Under kategorier',
      type: 'select',
      hasMany: false,
      localized: true,

      admin: {
        isClearable: true,
        isSortable: true,
        condition: (data, siblingData, { blockData, path, user }) => {
          if (data.categories === 'dam') {
            return true
          } else {
            return false
          }
        },
      },
      options: [
        {
          label: 'Jackor',
          value: 'jackor',
        },
        {
          label: 'Västar',
          value: 'västar',
        },
        {
          label: 'Skinnbyxor',
          value: 'skinnbyxor',
        },
        {
          label: 'Handskar',
          value: 'handskar',
        },
        {
          label: 'Bälten',
          value: 'bälten',
        },
        {
          label: 'Plånböcker',
          value: 'plånböcker',
        },
      ],
    },
    {
      name: 'accessoarercategories',
      label: 'Under kategorier',
      type: 'select',
      hasMany: false,
      localized: true,
      admin: {
        isClearable: true,
        isSortable: true,
        condition: (data, siblingData, { blockData, path, user }) => {
          if (data.categories === 'accessoarer') {
            return true
          } else {
            return false
          }
        },
      },
      options: [
        {
          label: 'Halsdukar',
          value: 'halsdukar',
        },
        {
          label: 'Bälten',
          value: 'bälten',
        },
        {
          label: 'Necessär',
          value: 'necessar',
        },
        {
          label: 'Plånböcker',
          value: 'plånböcker',
        },
        {
          label: 'Nyckelfodral',
          value: 'nyckelfodral',
        },
        {
          label: 'Korthållare',
          value: 'korthållare',
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

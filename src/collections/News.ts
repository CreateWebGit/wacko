import type { CollectionConfig } from 'payload'

export const News: CollectionConfig = {
  slug: 'news',
  labels: {
    singular: 'Nyhet',
    plural: 'Nyheter',
  },
  access: {
    read: () => true,
  },

  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Om nyhet',
          description: 'This will appear within the tab above the fields.',
          fields: [
            {
              name: 'title',
              label: 'Titel',
              type: 'text',
              localized: true,
              required: true,
            },
            {
              name: 'date',
              label: 'Datum',
              type: 'date',
              admin: {
                date: {
                  pickerAppearance: 'dayOnly',
                  displayFormat: 'd MMM yyy',
                },
              },
            },
            {
              name: 'images',
              label: 'Bild',
              type: 'upload',
              relationTo: 'media',
              required: true,
              hasMany: true,
            },
          ],
        },
        {
          name: 'tabTwo',
          label: 'Nyhetstext',
          fields: [
            {
              name: 'news',
              label: 'Nyhetstext',
              type: 'textarea',
              required: true,
              localized: true,

              admin: {
                rows: 10,
                style: { height: '500px' },
              },
            },
          ],
        },
      ],
    },
  ],
}

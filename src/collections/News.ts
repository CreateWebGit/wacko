import type { CollectionConfig } from 'payload'
import slugify from 'slugify'

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
            name: 'slug',
            label: 'Slug',
            type: 'text',
            localized: true,
            required: false,
            unique: true,
            admin: {
                position: 'sidebar',
                readOnly: true, // Set to true if you want it locked
            },
            hooks: {
                  beforeValidate: [
                      ({ value, data, locale }) => {
                          const title = typeof data?.title === 'object'
                              ? data.title?.[locale]
                              : data?.title

                          if (!value && title) {
                              return slugify(title, { lower: true, strict: true })
                          }

                          return value
                      }
                  ]
              }
          },
          {
              name: 'ingress',
              label: 'Ingress',
              type: 'textarea',
              required: true,
              localized: true,

              admin: {
                rows: 5,
              },
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
                rows: 30,
                style: { height: '500px' },
              },
            },
          ],
        },
      ],
    },
  ],
}

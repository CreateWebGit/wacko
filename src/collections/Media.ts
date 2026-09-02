import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
    slug: 'media',
    disableDuplicate: true,

    access: {
        read: () => true
    },
    fields: [
        {
            name: 'alt',
            type: 'text',
            required: false,
            localized: false
        }
    ],
    upload: {
        adminThumbnail: ({ doc }) => {
            if (typeof doc.thumbnailURL === 'string' && doc.thumbnailURL.length > 0) {
                return doc.thumbnailURL
            }

            if (typeof doc.url === 'string' && doc.url.length > 0) {
                return doc.url
            }

            if (typeof doc._key === 'string' && doc._key.length > 0) {
                return `https://utfs.io/f/${doc._key}`
            }

            return null
        },

        focalPoint: true,

        imageSizes: [
            {
                name: 'thumbnail',
                width: 300
            },
            {
                name: 'square',
                width: 500,
                height: 500
            },
            {
                name: 'small',
                width: 600
            },
            {
                name: 'medium',
                width: 900
            },
            {
                name: 'large',
                width: 1400
            },
            {
                name: 'xlarge',
                width: 1920
            },
            {
                name: 'og',
                width: 1200,
                height: 630,
                crop: 'center'
            }
        ]
    }
}

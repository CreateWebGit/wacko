// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { en } from '@payloadcms/translations/languages/en'
import { sv } from '@payloadcms/translations/languages/sv'

import { Users } from './collections/Users'
import { Products } from './collections/Products'
import { Media } from './collections/Media'
import { News } from './collections/News'
import { uploadthingStorage } from '@payloadcms/storage-uploadthing'

import { Pages } from './globals/pages'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
    admin: {
        user: Users.slug,
        importMap: {
            baseDir: path.resolve(dirname)
        }
    },
    globals: [Pages],
    collections: [Users, Products, News, Media],
    editor: lexicalEditor(),
    secret: process.env.PAYLOAD_SECRET || '',
    typescript: {
        outputFile: path.resolve(dirname, 'payload-types.ts')
    },
    db: mongooseAdapter({
        url: process.env.DATABASE_URI || ''
    }),
    sharp,
    plugins: [
        uploadthingStorage({
            collections: {
                media: { disablePayloadAccessControl: true }
            },
            options: {
                token: process.env.UPLOADTHING_TOKEN || ''
            }
        })
    ],
    localization: {
        locales: [
            {
                label: {
                    en: 'English',
                    sv: 'Engelska'
                },
                code: 'en'
            },
            {
                label: {
                    en: 'Swedish',
                    sv: 'Svenska'
                },
                code: 'sv'
            }
        ], // required
        defaultLocale: 'sv',
        fallback: true
    },
    i18n: {
        supportedLanguages: { en, sv }
    }
})

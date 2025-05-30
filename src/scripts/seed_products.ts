import payload from 'payload'
import fs from 'fs/promises'
import path from 'path'
import config from '../payload.config'
import { fileURLToPath } from 'url'
import 'dotenv/config'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const run = async () => {
  await payload.init({
    config,
    secret: process.env.PAYLOAD_SECRET || 'dev-secret', // <-- this shuts it up
    ...({ local: true } as any),
  })

  const filePath = path.resolve(__dirname, '../data/wacko_products_updated.json')
  const file = await fs.readFile(filePath, 'utf-8')
  const products = JSON.parse(file)

  for (const product of products) {
    try {
      await payload.create({
        collection: 'products',
        data: {
          title: product.title,
          price: product.price,
          articleNumber: product.articleNumber,
          metaDescription: product.metaDescription,
          images: [],
        },
      })
      console.log(`✅ Seeded: ${product.title}`)
    } catch (err) {
      if (err instanceof Error) {
        console.error(`❌ Failed to seed ${product.title}:`, err.message)
      } else {
        console.error(`❌ Failed to seed ${product.title}:`, err)
      }
    }
  }

  console.log('🌱 Done seeding!')
  process.exit(0)
}

run()

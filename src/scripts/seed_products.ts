import 'dotenv/config';
import payload from 'payload';
import config from '../payload.config';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const run = async () => {
    await payload.init({
        config,
        secret: process.env.PAYLOAD_SECRET || 'dev-secret',
        ...( { local: true } as any ),
    });

    const filePath = path.resolve(__dirname, '../data/wacko_products_updated.json');
    const file = await fs.readFile(filePath, 'utf-8');
    const products = JSON.parse(file);

    for (const product of products) {
        try {
            const imageIDs = product.images?.map(img => img.id).filter(Boolean) || [];

            const created = await payload.create({
                collection: 'products',
                data: {
                  title: product.title,
                  price: product.price,
                  articleNumber: product.articleNumber,
                  metaDescription: product.metaDescription,
                  images: imageIDs.length > 0 ? imageIDs : undefined,
              }
            });

            console.log(`✅ Seeded: ${created.title}`);
        } catch (err) {
            const msg = err instanceof Error ? err.message : String(err);
            console.error(`❌ Failed to seed ${product.title}:`, msg);
        }
    }

    console.log(`🌱 Done! Seeded ${products.length} products.`);
    process.exit(0);
};

run();
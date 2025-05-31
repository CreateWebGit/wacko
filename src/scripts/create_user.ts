import 'dotenv/config';
import payload from 'payload';
import config from '../payload.config';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const run = async () => {
    await payload.init({
        config,
        secret: process.env.PAYLOAD_SECRET || 'dev-secret',
        ...( { local: true } as any ),
    });

    try {
        const user = await payload.create({
            collection: 'users',
            data: {
                email: 'emilavara@hotmail.com',
                password: 'asdasd123',
            },
        });

        console.log('✅ Created user:', user.email);
    } catch (err) {
        const msg = err instanceof Error ? err.message : String(err);
        console.error('❌ Error creating user:', msg);
    }

    process.exit(0);
};

run();
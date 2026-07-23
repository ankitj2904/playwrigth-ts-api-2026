import dotenv from 'dotenv';
import path from 'path';

const envPath = path.resolve(__dirname, '..', '..', '.env');

dotenv.config({ path: envPath, override: true });

export const env = {
    BASE_URL: process.env.BASE_URL || '',
    USERNAME: process.env.USERNAME || '',
    PASSWORD: process.env.PASSWORD || ''
};
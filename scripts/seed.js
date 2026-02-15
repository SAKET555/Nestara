import pg from 'pg';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const connectionString = process.env.SUPABASE_DATABASE_STRING;

if (!connectionString) {
    console.error('Error: SUPABASE_DATABASE_STRING is not defined in .env');
    process.exit(1);
}

const client = new pg.Client({
    connectionString,
});

async function seed() {
    try {
        await client.connect();
        console.log('Connected to database...');

        const schemaPath = path.join(__dirname, '..', 'supabase_schema.sql');
        const sql = fs.readFileSync(schemaPath, 'utf8');

        console.log('Running SQL schema...');

        // Split by semicolons allows basic separation, but simple execution of full string 
        // usually works if the driver supports multiple statements (pg does).
        await client.query(sql);

        console.log('Database seeded successfully!');
    } catch (err) {
        console.error('Error seeding database:', err);
    } finally {
        await client.end();
    }
}

seed();

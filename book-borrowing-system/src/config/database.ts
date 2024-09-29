import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export const db = open({
    filename: './database.db',
    driver: sqlite3.Database,
});

const initializeDatabase = async () => {
    const database = await db;
    await database.exec(`
        CREATE TABLE IF NOT EXISTS members (
            code TEXT PRIMARY KEY,
            name TEXT
        )
    `);
    
    await database.exec(`
        CREATE TABLE IF NOT EXISTS books (
            code TEXT PRIMARY KEY,
            title TEXT,
            author TEXT,
            stock INTEGER
        )
    `);
};

initializeDatabase().catch(console.error);

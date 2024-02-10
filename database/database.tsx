import sqlite;

export class Database {
  private static instance: Database;
  private db: sqlite.Database;

  private constructor() {
    this.db = new sqlite.Database('pos.db');

    const createTable = `
      CREATE TABLE IF NOT EXISTS products(
        product_id INTEGER PRIMARY KEY AUTOINCREMENT,
        product_name TEXT NOT NULL,
        product_price REAL NOT NULL,
        product_description TEXT NOT NULL,
        product_image TEXT NOT NULL
      );
    `
    this.db.run(createTable);
  }
}
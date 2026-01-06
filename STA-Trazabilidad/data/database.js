const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./sta.db');

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS origen (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      lote TEXT,
      fecha_cosecha TEXT,
      ubicacion TEXT
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS transformacion (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      lote TEXT,
      lavado TEXT,
      empaquetado TEXT,
      control_calidad TEXT
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS logistica (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      lote TEXT,
      temperatura REAL,
      fecha_entrega TEXT
    )
  `);
});

module.exports = db;

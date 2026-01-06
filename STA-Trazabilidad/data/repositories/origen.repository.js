const db = require('../database');

class OrigenRepository {
  static crear(origen, callback) {
    const sql = `
      INSERT INTO origen (lote, fecha_cosecha, ubicacion)
      VALUES (?, ?, ?)
    `;
    db.run(sql, [origen.lote, origen.fecha_cosecha, origen.ubicacion], callback);
  }

  static obtenerPorLote(lote, callback) {
    db.get(`SELECT * FROM origen WHERE lote = ?`, [lote], callback);
  }
}

module.exports = OrigenRepository;

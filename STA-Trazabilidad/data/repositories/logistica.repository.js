const db = require('../database');

class LogisticaRepository {
  static crear(data, callback) {
    const sql = `
      INSERT INTO logistica (lote, temperatura, fecha_entrega)
      VALUES (?, ?, ?)
    `;
    db.run(sql, [data.lote, data.temperatura, data.fecha_entrega], callback);
  }

  static obtenerPorLote(lote, callback) {
    db.get(`SELECT * FROM logistica WHERE lote = ?`, [lote], callback);
  }
}

module.exports = LogisticaRepository;

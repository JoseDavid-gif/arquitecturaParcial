const db = require('../database');

class TransformacionRepository {
  static crear(data, callback) {
    const sql = `
      INSERT INTO transformacion (lote, lavado, empaquetado, control_calidad)
      VALUES (?, ?, ?, ?)
    `;
    db.run(sql, [
      data.lote,
      data.lavado,
      data.empaquetado,
      data.control_calidad
    ], callback);
  }

  static obtenerPorLote(lote, callback) {
    db.get(`SELECT * FROM transformacion WHERE lote = ?`, [lote], callback);
  }
}

module.exports = TransformacionRepository;

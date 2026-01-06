const OrigenRepository = require('../../data/repositories/origen.repository');

class OrigenService {
  static registrar(origen, callback) {
    if (!origen.lote || !origen.fecha_cosecha) {
      return callback(new Error('Datos de origen incompletos'));
    }
    OrigenRepository.crear(origen, callback);
  }
}

module.exports = OrigenService;

const TransformacionRepository = require('../../data/repositories/transformacion.repository');

class TransformacionService {
  static registrar(data, callback) {
    TransformacionRepository.crear(data, callback);
  }
}

module.exports = TransformacionService;

const LogisticaRepository = require('../../data/repositories/logistica.repository');

class LogisticaService {
  static registrar(data, callback) {
    if (data.temperatura > 10) {
      console.log('⚠️ Temperatura fuera del rango recomendado');
    }
    LogisticaRepository.crear(data, callback);
  }
}

module.exports = LogisticaService;

const OrigenService = require('../../business/services/origen.service');
const TransformacionService = require('../../business/services/transformacion.service');
const LogisticaService = require('../../business/services/logistica.service');

const OrigenRepo = require('../../data/repositories/origen.repository');
const TransformacionRepo = require('../../data/repositories/transformacion.repository');
const LogisticaRepo = require('../../data/repositories/logistica.repository');

class TrazabilidadController {
  static registrarOrigen(req, res) {
    OrigenService.registrar(req.body, err => {
      if (err) return res.status(400).json({ error: err.message });
      res.json({ mensaje: 'Origen registrado' });
    });
  }

  static registrarTransformacion(req, res) {
    TransformacionService.registrar(req.body, err => {
      res.json({ mensaje: 'Transformación registrada' });
    });
  }

  static registrarLogistica(req, res) {
    LogisticaService.registrar(req.body, err => {
      res.json({ mensaje: 'Logística registrada' });
    });
  }

  static obtenerTrazabilidad(req, res) {
    const lote = req.params.lote;

    OrigenRepo.obtenerPorLote(lote, (err, origen) => {
      TransformacionRepo.obtenerPorLote(lote, (err, transformacion) => {
        LogisticaRepo.obtenerPorLote(lote, (err, logistica) => {
          res.json({ origen, transformacion, logistica });
        });
      });
    });
  }
}

module.exports = TrazabilidadController;

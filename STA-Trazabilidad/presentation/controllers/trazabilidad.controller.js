const OrigenService = require('../../business/services/origen.service');
const TransformacionService = require('../../business/services/transformacion.service');
const LogisticaService = require('../../business/services/logistica.service');
const TrazabilidadService = require('../../business/services/trazabilidad.service');

class TrazabilidadController {

  static registrarOrigen(req, res) {
    OrigenService.registrar(req.body, err => {
      if (err) {
        return res.status(400).json({ error: err.message });
      }
      res.json({ mensaje: 'Origen registrado' });
    });
  }

  static registrarTransformacion(req, res) {
    TransformacionService.registrar(req.body, err => {
      if (err) {
        return res.status(400).json({ error: err.message });
      }
      res.json({ mensaje: 'Transformación registrada' });
    });
  }

  static registrarLogistica(req, res) {
    LogisticaService.registrar(req.body, err => {
      if (err) {
        return res.status(400).json({ error: err.message });
      }
      res.json({ mensaje: 'Logística registrada' });
    });
  }

  static async obtenerTrazabilidad(req, res) {
    try {
      const { lote } = req.params;

      const resultado = await TrazabilidadService.obtenerTrazabilidad(lote);

      res.json(resultado);
    } catch (error) {
      res.status(500).json({
        mensaje: 'Error al consultar la trazabilidad',
        error: error.message
      });
    }
  }
}

module.exports = TrazabilidadController;

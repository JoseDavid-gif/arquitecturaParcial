const express = require('express');
const router = express.Router();
const Controller = require('../controllers/trazabilidad.controller');

router.post('/origen', Controller.registrarOrigen);
router.post('/transformacion', Controller.registrarTransformacion);
router.post('/logistica', Controller.registrarLogistica);
router.get('/trazabilidad/:lote', Controller.obtenerTrazabilidad);

module.exports = router;

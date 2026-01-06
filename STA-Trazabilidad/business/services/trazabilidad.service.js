const origenService = require('./origen.service');
const transformacionService = require('./transformacion.service');
const logisticaService = require('./logistica.service');

async function obtenerTrazabilidad(lote) {
  const origen = await origenService.obtenerPorLote(lote);
  const transformacion = await transformacionService.obtenerPorLote(lote);
  const logistica = await logisticaService.obtenerPorLote(lote);

  return {
    origen,
    transformacion,
    logistica
  };
}

module.exports = {
  obtenerTrazabilidad
};

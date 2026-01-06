const API = '/api';
const lote = 'MANGO-001';

function registrarOrigen() {
  fetch(API + '/origen', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      lote,
      fecha_cosecha: document.getElementById('fecha').value,
      ubicacion: document.getElementById('ubicacion').value
    })
  }).then(() => alert('Origen registrado'));
}

function registrarTransformacion() {
  fetch(API + '/transformacion', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      lote,
      lavado: document.getElementById('lavado').value,
      empaquetado: document.getElementById('empaquetado').value,
      control_calidad: document.getElementById('calidad').value
    })
  }).then(() => alert('Transformación registrada'));
}

function registrarLogistica() {
  fetch(API + '/logistica', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      lote,
      temperatura: document.getElementById('temperatura').value,
      fecha_entrega: document.getElementById('entrega').value
    })
  }).then(() => alert('Logística registrada'));
}

function consultar() {
  fetch(API + '/trazabilidad/' + lote)
    .then(res => res.json())
    .then(data => {
      document.getElementById('resultado').textContent =
        JSON.stringify(data, null, 2);
    });
}

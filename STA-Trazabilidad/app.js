const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

const rutas = require('./presentation/routes/trazabilidad.routes');
app.use('/api', rutas);

app.listen(3000, () => {
  console.log('STA ejecutándose en http://localhost:3000');
});

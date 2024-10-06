const express = require('express');
const path = require('path');
const app = express();
const usuariosRouter = require('./routes/usuarios');
const publicacionesRouter = require('./routes/publicaciones');
const amistadesRouter = require('./routes/amistades');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Configuración de vistas para EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Rutas
app.use('/usuarios', usuariosRouter);
app.use('/publicaciones', publicacionesRouter);
app.use('/amistades', amistadesRouter);

// Middleware para manejar errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo salió mal!');
});

// Iniciar el servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

module.exports = app;

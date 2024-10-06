const express = require('express');
const path = require('path');
const app = express();
const UsuariosController = require('./controllers/usuariosController'); // Importa el controlador de usuarios
const PublicacionesController = require('./controllers/publicacionesController'); // Importa el controlador de publicaciones
const usuariosRouter = require('./routes/usuarios');
const publicacionesRouter = require('./routes/publicaciones');
const comentariosRouter = require('./routes/comentarios');
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
app.use('/comentarios', comentariosRouter);

// Rutas para vistas EJS
app.get('/', (req, res) => {
  res.render('index'); // Renderiza la vista index.ejs
});

// Renderizar la lista de usuarios
app.get('/usuarios', (req, res) => {
  res.render('usuarios', { usuarios: UsuariosController.usuarios }); // Muestra la lista de usuarios
});

// Renderizar la lista de publicaciones
app.get('/publicaciones', (req, res) => {
  res.render('publicaciones', { publicaciones: PublicacionesController.publicaciones }); // Muestra la lista de publicaciones
});

// Middleware para manejar errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render('error', { message: 'Ocurrió un error en el servidor.', error: err }); // Renderiza la vista de error
});

// Manejo de rutas no encontradas
app.use((req, res) => {
  res.status(404).render('error', { message: 'Página no encontrada.' }); // Renderiza la vista de error para rutas no encontradas
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

module.exports = app;

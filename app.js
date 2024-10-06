const express = require('express');
const path = require('path');
const app = express();
const usuariosRouter = require('./routes/usuarios');
const publicacionesRouter = require('./routes/publicaciones');
const amistadesRouter = require('./routes/amistades');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Rutas
app.use('/usuarios', usuariosRouter);
app.use('/publicaciones', publicacionesRouter);
app.use('/amistades', amistadesRouter);

module.exports = app;

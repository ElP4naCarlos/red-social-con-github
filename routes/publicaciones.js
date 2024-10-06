const express = require('express');
const router = express.Router();
const PublicacionesController = require('../controllers/publicacionesController');

// Definir rutas
router.get('/', PublicacionesController.listarPublicaciones);                // Listar todas las publicaciones
router.post('/', PublicacionesController.crearPublicacion);                  // Crear una nueva publicación
router.get('/:id', PublicacionesController.obtenerPublicacionPorId);         // Obtener publicación por ID
router.put('/:id', PublicacionesController.editarPublicacion);               // Editar publicación
router.delete('/:id', PublicacionesController.eliminarPublicacion);          // Eliminar publicación

module.exports = router;

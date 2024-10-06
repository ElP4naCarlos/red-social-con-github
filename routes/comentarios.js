const express = require('express');
const router = express.Router();
const ComentariosController = require('../controllers/comentariosController');

// Definir rutas
router.post('/', ComentariosController.agregarComentario); // Agregar un comentario
router.get('/:publicacionId', ComentariosController.listarComentarios); // Listar comentarios por publicación
router.get('/', ComentariosController.listarTodosComentarios); // Listar todos los comentarios
router.put('/:id', ComentariosController.editarComentario); // Actualizar un comentario
router.delete('/:id', ComentariosController.eliminarComentario); // Eliminar un comentario

module.exports = router;

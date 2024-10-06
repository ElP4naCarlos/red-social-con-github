const express = require('express');
const router = express.Router();
const UsuariosController = require('../controllers/usuariosController');

// Definir rutas
router.get('/', UsuariosController.listarUsuarios);        // Para listar todos los usuarios
router.post('/', UsuariosController.crearUsuario);         // Para crear un nuevo usuario
router.get('/:id', UsuariosController.obtenerUsuarioPorId); // NUEVA RUTA: Para obtener un usuario por su ID
router.put('/:id', UsuariosController.editarUsuario);      // Para editar un usuario por ID
router.delete('/:id', UsuariosController.eliminarUsuario); // Para eliminar un usuario por ID

module.exports = router;

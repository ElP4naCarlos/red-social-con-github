const express = require('express');
const router = express.Router();
const AmistadesController = require('../controllers/amistadesController');

// Definir rutas
router.post('/', AmistadesController.agregarAmistad); // Agregar amistad
router.put('/:id', AmistadesController.aceptarAmistad); // Aceptar amistad
router.delete('/:id', AmistadesController.eliminarAmistad); // Eliminar amistad
router.get('/', AmistadesController.listarAmistades); // Listar amistades

module.exports = router;

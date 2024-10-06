const express = require('express');
const router = express.Router();

// Definir rutas para publicaciones aquí
router.get('/', (req, res) => {
    res.send('Publicaciones');
});

module.exports = router;

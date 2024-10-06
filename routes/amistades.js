const express = require('express');
const router = express.Router();

// Definir rutas para amistades aquí
router.get('/', (req, res) => {
    res.send('Amistades');
});

module.exports = router;

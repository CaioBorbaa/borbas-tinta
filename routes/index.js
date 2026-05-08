const express = require('express');
const router = express.Router();

// Importamos o controller
const tintasController = require('../modules/tintas/tintasController');

// A rota limpa
router.get('/', tintasController.listarTintasHome);

module.exports = router;
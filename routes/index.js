const express = require('express');
const router = express.Router();

// 1. Importamos o modelo de tintas para poder conversar com o banco
const Tinta = require('../modules/tintas/tintasModel');

/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
    // 2. Pedimos ao Sequelize para buscar TODOS os registros na tabela 'tintas'
    const listaDeTintas = await Tinta.findAll();

    // 3. Renderizamos a view 'index.ejs' e enviamos a lista para ela
    res.render('index', { 
      title: "Borba's Tinta",
      produtos: listaDeTintas // A variável 'produtos' agora contém os dados do banco!
    });

  } catch (error) {
    console.error("Erro ao buscar tintas no banco de dados:", error);
    res.status(500).send("Erro interno ao carregar a página inicial.");
  }
});

module.exports = router;
const Tinta = require('./tintasModel');

const tintasController = {
    // Veja como o async está colado nos parênteses da função
    listarTintasHome: async (req, res) => {
        try {
            const listaDeTintas = await Tinta.findAll();

            res.render('index', { 
                title: "Borba's Tinta",
                produtos: listaDeTintas 
            });

        } catch (error) {
            console.error("Erro ao buscar tintas no banco de dados:", error);
            res.status(500).send("Erro interno ao carregar a página inicial.");
        }
    }
};

module.exports = tintasController;
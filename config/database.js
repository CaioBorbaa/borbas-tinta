// Configuração do banco de dados
const { Sequelize } = require('sequelize');
const path = require('path');

// 1. Força o dotenv a procurar o arquivo .env exatamente na pasta anterior (raiz do projeto)
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });


// 3. Forma mais segura e padrão de instanciar o Sequelize
const sequelize = new Sequelize(
    process.env.DB_NAME,       // Nome do banco
    process.env.DB_USER,       // Usuário
    process.env.DB_PASSWORD,   // Senha (Mesmo se for vazia)
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'mysql',
        logging: false,
        define: {
            timestamps: true,
            underscored: true,
        }
    }
);

module.exports = sequelize;
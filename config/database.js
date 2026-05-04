// Configuração do banco de dados
const { Sequelize } = require('sequelize');
const path = require('path');

// 1. Força o dotenv a procurar o arquivo .env exatamente na pasta anterior (raiz do projeto)
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

// 2. Teste Cagueta: Se aparecer "undefined" no terminal, o arquivo .env não está sendo lido!
console.log("--- TESTE DE VARIÁVEIS ---");
console.log("Banco:", process.env.DB_NAME);
console.log("Usuário:", process.env.DB_USER);
console.log("Senha:", process.env.DB_PASSWORD);
console.log("--------------------------");

// 3. Forma mais segura e padrão de instanciar o Sequelize
const sequelize = new Sequelize(
    process.env.DB_NAME,       // Nome do banco
    process.env.DB_USER,       // Usuário
    process.env.DB_PASSWORD,   // Senha (Mesmo se for vazia)
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'mysql',
        logging: console.log,
        define: {
            timestamps: true,
            underscored: true,
        }
    }
);

module.exports = sequelize;
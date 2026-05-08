const { DataTypes } = require('sequelize');

// Como estamos dentro de modules/tintas, precisamos voltar duas pastas (../../) para achar a config
const sequelize = require('../../config/database');

//definindo modelo
const Tinta = sequelize.define('tintasModel', {
    //no sequelize nao precisa criar ID, pois ele ja cria automaticamente.

    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    marca: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cor: {
        type: DataTypes.STRING,
        allowNull: false
    },
    preco: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
    quantidade_estoque: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }

},{
    tableName: 'tinta',
    timestamps: true
});

module.exports = Tinta;
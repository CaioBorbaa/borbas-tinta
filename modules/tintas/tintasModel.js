const { DataTypes } = require('sequelize');

// Como estamos dentro de modules/tintas, precisamos voltar duas pastas (../../) para achar a config
const sequelize = require('../../config/database');

//definindo modelo
const Tinta = sequelize.define('tintasModel', {
    //no sequelize nao precisa criar ID, pois ele ja cria automaticamente.

    nome: {
        type: DataTypes.STRING,
        allownull: false
    },
    marca: {
        type: DataTypes.STRING,
        allownull: false
    },
    cor: {
        type: DataTypes.STRING,
        allownull: false
    },
    preco: {
        type: DataTypes.DECIMAL(10,2),
        allownull: false
    },
    quantidade_estoque: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }

},{
    tableName: 'tintas',
    timestamps: true
});
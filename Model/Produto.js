const db = require('../Utils/databaseConnection');

const Produto = db.sequelize.define("produtos", {
    nome: {
        type: db.Sequelize.STRING,
        unique: true
    },
    valor: {
        type: db.Sequelize.FLOAT
    },
    imagem: {
        type: db.Sequelize.BLOB
    },
    quantidade: {
        type:db.Sequelize.FLOAT
    }

});

module.exports = Produto;

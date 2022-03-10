const db = require('../Utils/databaseConnection');

const User = db.sequelize.define("user", {
    nome: {
        type: db.Sequelize.STRING
    },
    email: {
        type: db.Sequelize.STRING,
        unique: true
    },
    TipoAcesso: {
        type: db.Sequelize.STRING
    },
    senha: {
        type:db.Sequelize.STRING
    }

});

//const fcreate = User.sync({force:true});
//User.create({nome: 'ian', email: 'ian@ian', senha: '1234', TipoAcesso: 'admin'});
//User.create({nome: 'ian2', email: 'ian2@ian', senha: '1234', TipoAcesso: 'user'});


module.exports = User;

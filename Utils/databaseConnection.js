const Sequelize = require("sequelize");
const sequelize = new Sequelize("sgv", "sa", "SqlServerAdm1", {
    host:"localhost",
    dialect:"mssql"

});

sequelize.authenticate().then( () => {console.log("logado!")} )
    .catch( function(erro){console.log("deu ruim" + erro)});


/*
Produto.create({
    nome:"Agua",
    valor: 1.60,
    quantidade: 25.0
});

Produto.create({
    nome:"Suco",
    valor: 4.0,
    quantidade: 25.0
});
*/
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
};
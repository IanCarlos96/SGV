const Sequelize = require("sequelize");
const sequelize = new Sequelize("sgv", "sa", "SqlServerAdm1", {
    host:"localhost",
    dialect:"mssql"

});

sequelize.authenticate().then(() => {console.log("logado!")}).catch(function(erro) {console.log("deu ruim" + erro)});
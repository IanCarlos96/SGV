//var imported = require('./extraFunction');
//console.log(imported());

//var webServerHttp = require('./webServer/server');

const {engine} = require("express-handlebars");
const webServerExpress = require('express');
const bodyParser = require('body-parser');
const path = require("path");


const produtoRoutes = require('./Routes/Produtos/produtosRoutes');
const loginRoutes = require('./Routes/Login/LoginRoutes');


//Config
  //WebServer
    const webServer = webServerExpress();
  //Template Engine
    webServer.engine('handlebars', engine());
    webServer.set("view engine", "handlebars");
    webServer.set('views', './views');
  //Body Parser
    webServer.use(bodyParser.urlencoded({extended: false}));
    webServer.use(bodyParser.json());
  //database
    const sequelize = require('./Utils/databaseConnection');
  //public
    webServer.use(webServerExpress.static(path.join(__dirname, "public")));
  
    

//Routing
  webServer.use('/', loginRoutes);
  webServer.use('/produtos', produtoRoutes);

webServer.get("/user/:nome", function(req, res){
  res.send("Logged as " + req.params.nome);
});


webServer.listen(8081, function() {


});



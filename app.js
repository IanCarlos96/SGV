//var imported = require('./extraFunction');
//console.log(imported());

//var webServerHttp = require('./webServer/server');

const {engine} = require("express-handlebars");
const webServerExpress = require('express');
const bodyParser = require('body-parser');

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
  
    var produtoController = require('./Controller/ProdutoController');

//Routing
webServer.get('/', function(req, res){
  produtoController.listaProdutos().then(function(produtosList) {
    //console.log(produtosList);
    res.render('index', {produtosList: produtosList });
  });
  //res.render('index');
});

webServer.get('/produtosForm', function(req, res){
  res.render('produtosForm');
});

webServer.get('/produtosForm/:id', function(req, res){
  produtoController.buscaProduto(req.params.id).then(function(produto) {
    //console.log(produto);
    res.render('produtosForm', produto);
  })
});

webServer.post('/salvaProduto', function(req, res) {
  var insertStatus = produtoController.insertProduto(req.body);
  console.log(insertStatus);
  if(insertStatus != true) {
    res.render('errorStat', insertStatus);
  }else{
    res.redirect('/');
  }
  
});

webServer.get("/user/:nome", function(req, res){
  res.send("Logged as " + req.params.nome);
});


webServer.listen(8081, function() {


});



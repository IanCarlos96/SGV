var imported = require('./extraFunction');
console.log(imported());

//var webServerHttp = require('./webServer/server');
const webServerExpress = require('express');
const webServer = webServerExpress();

//Routing
webServer.get('/', function(req, res){
  res.sendFile(__dirname+"/View/index.html");
});

webServer.get("/user/:nome", function(req, res){
  res.send("Logged as " + req.params.nome);
});


webServer.listen(8081, function() {


});



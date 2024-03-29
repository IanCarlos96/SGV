const express = require("express");
const router = express.Router();

var produtoController = require('../../Controller/ProdutoController');

router.get('/', function(req, res){
    produtoController.listaProdutos().then(function(produtosList) {
      res.render('Produtos/index', {produtosList: produtosList });
    });
  });
  

router.get('/produtosForm', function(req, res){
    res.render('Produtos/produtosForm');
});

router.get('/produtosForm/:id', function(req, res){
    produtoController.buscaProduto(req.params.id).then(function(produto) {
        res.render('Produtos/produtosForm', produto);
    })
});

router.post('/salvaProduto', async function(req, res) {
    var insertStatus = await produtoController.insertProduto(req.body);
    if(insertStatus == true) {
        res.redirect('/index');
    } else {
        res.render('errorStat', insertStatus);
    }
});

module.exports = router;

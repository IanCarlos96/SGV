var produto = require('../Model/Produto');

var validaDados = function(dados) {
    if(dados.produtoValor <= 0 || dados.produtoEstoque < 0) {
        return "false";
    }
    if(dados.produtoNome == null || dados.produtoNome == ''){
        return "false";
    }
    return true;
};

var insertProduto = function(dados) {
    console.log(dados);
    if(validaDados(dados)) {
        if(dados.produtoId == null || dados.produtoId == "") {
            produto.create({
                nome: dados.produtoNome,
                valor: dados.produtoValor,
                quantidade: dados.produtoEstoque,
                imagem: dados.produtoImg
            }).then(function() {
                return true;
            }).catch(function(erro) {
                return erro;
            });
        } else {
            produto.update({
                nome: dados.produtoNome,
                valor: dados.produtoValor,
                quantidade: dados.produtoEstoque,
                imagem: dados.produtoImg
            }, {
                where: {
                    _id: dados.produtoId
                }
            }).then(function() {
                return true;
            }).catch(function(erro){
                return erro;
            });
        }
    } else {
        return false;
    }

}

var listaProdutos = function() {
    return produto.findAll();
}

var buscaProduto = function(id) {
    return produto.findByPk(id);
}

module.exports = {
    validaDados: validaDados,
    insertProduto: insertProduto,
    listaProdutos: listaProdutos,
    buscaProduto: buscaProduto
};
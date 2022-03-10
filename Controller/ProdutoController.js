const req = require('express/lib/request');
const res = require('express/lib/response');
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

var insertProduto = async function(dados) {
    console.log(dados);
    if(validaDados(dados)) {
        if(dados.produtoId == null || dados.produtoId == "") {
            return await produto.create({
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
            return await produto.update({
                nome: dados.produtoNome,
                valor: dados.produtoValor,
                quantidade: dados.produtoEstoque,
            }, {
                where: {
                    id: dados.produtoId
                }
            }).then(function() {
                console.log("update com sucesso!");
                return true;
            }).catch(function(erro){
                console.log("problema no update. Erro: "+erro);
                return erro;
            });
            
        }
    } else {
        return false;
    }

}

var listaProdutos = async function() {
    return await produto.findAll({order: [['nome', 'DESC']]});
}

var buscaProduto = async function(id) {
    return await produto.findByPk(id);
}

module.exports = {
    validaDados: validaDados,
    insertProduto: insertProduto,
    listaProdutos: listaProdutos,
    buscaProduto: buscaProduto
};
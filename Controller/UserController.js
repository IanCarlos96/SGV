const req = require('express/lib/request');
const res = require('express/lib/response');
var users = require('../Model/User');

const autentica = async function(dados){
    console.log("DADOS:    "+dados);
    if(dados.email != null && dados.email != "" && dados.pass != null && dados.pass != "") {
        return await users.findOne({
            where: {
                email: dados.email,
                senha: dados.pass
            }})
            .then(() => {
                return true;
            })
            .catch(() => {
                return false;
            }
        );
        
    } else {
        return false;
    }
}

const cria = async function() {
    return await users.create({nome: 'ian', email: 'ian@ian', senha: '1234'})
    .then(() => {return true})
    .catch(()=> {return false});

}

module.exports = {
    autentica: autentica,
    cria: cria
};
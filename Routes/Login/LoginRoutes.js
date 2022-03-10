const express = require("express");
const router = express.Router();

var userController = require('../../Controller/UserController');

router.get('/', (req, res) => {
    res.render("Root/login");
});

router.post("/autentica", async function (req, res) {
    console.log(req.body);
    dados = {
        email: req.body.email,
        pass: req.body.pass
    }
    var autenticacao = await userController.autentica(dados);
    if(autenticacao == true) {
        res.redirect('/index');
    } else {
        res.render('Root/login', autenticacao);
    }
});

router.get('/index', (req, res) => {
    res.render('Root/index');
});

module.exports = router;
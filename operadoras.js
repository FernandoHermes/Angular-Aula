// var http = require('http');
var router = require('router');
var app = router(3412);
var operadoras = [{
    "nome": "OI",
    "codigo": 14,
    "categoria": "Telefone Celular"
}, {
    "nome": "GVT",
    "codigo": 25,
    "categoria": "Telefone Celular"
}, {
    "nome": "Claro",
    "codigo": 15,
    "categoria": "Telefone Fixo"
}, {
    "nome": "Tim",
    "codigo": 18,
    "categoria": "Telefone Fixo"
}];
http.createServer(function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.write(JSON.stringify(operadoras));
    res.end();
}).listen(3412);
// var http = require('http');
var router = require('router');
var app = router(3412);

var contatos = [{
    "nome": "Alair Tavares",
    "telefone": "48-9999-89999",
    "data": new Date(),
    "operadora": "GVT"
}, {
    "nome": "Luiz Bauher",
    "telefone": "48-9999-7777",
    "data": new Date(),
    "operadora": "VIVO"
}, {
    "nome": "João De La Rosa",
    "telefone": "48-8888-8888",
    "data": new Date(),
    "operadora": "OI"
}, {
    "nome": "Mateus Ferreira",
    "telefone": "48-22222-22222",
    "data": new Date(),
    "operadora": "CLARO"
}, {
    "nome": "Victor Botamedi",
    "telefone": "48-3333-8888",
    "data": new Date(),
    "operadora": "OI"
}, {
    "nome": "Thiago Silva",
    "telefone": "48-3333-8888",
    "data": new Date(),
    "operadora": "GVT"
}, {
    "nome": "Mister Anderson",
    "telefone": "48-XXXX-XXXX",
    "data": new Date(),
    "operadora": "GVT"
}];
http.createServer(function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.write(JSON.stringify(contatos));
    res.end();
}).listen(3410);
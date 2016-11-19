var router = require('./js/router');
var app = router(3412);
var contatos = [
    {"nome": "Alair Tavares", "telefone": "48-9999-89999", "data": new Date(), "cor": "lightgray"},
    {"nome": "Luiz Bauher", "telefone": "48-9999-7777", "data": new Date(), "cor": "#fbfbfb"},
    {"nome": "João De La Rosa", "telefone": "48-8888-8888", "data": new Date(), "cor": "lightgray"},
    {"nome": "Mateus Ferreira", "telefone": "48-22222-22222", "data": new Date(), "cor": "#fbfbfb"},
    {"nome": "Victor Botamedi", "telefone": "48-3333-8888", "data": new Date(), "cor": "lightgray"},
    {"nome": "Thiago Silva", "telefone": "48-3333-8888", "data": new Date(), "cor": "#fbfbfb"},
    {"nome": "Mister Anderson", "telefone": "48-XXXX-XXXX", "data": new Date(),"cor": "lightgray"}
    ];

    var operadoras = [
    {"nome": "OI", "codigo": 14, "categoria": "Telefone Celular"},
    {"nome": "GVT", "codigo": 25, "categoria": "Telefone Celular"},
    {"nome": "Claro", "codigo": 15, "categoria": "Telefone Fixo"},
    {"nome": "Tim", "codigo": 18, "categoria": "Telefone Fixo"}
];

app.get('/contatos', function(req, res) {
    res.write(JSON.stringify(contatos));
    res.end();
});

app.get('/operadoras', function(req, res) {
    res.write(JSON.stringify(operadoras));
    res.end();
});

app.post('/contatos', function (req, res){
    res.end();
});
app.post('/operadoras', function (req, res){
    res.end();
});


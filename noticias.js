var httpURL = require('http');
var porta = 3000;

//cria um servidor http 
var server = httpURL.createServer(function(req,res){

    //mapeia a URL utilizada na requisição
    var categoria = req.url;
    var retorno = '';

    categoria = categoria.split('/',5);
    
    switch (categoria[1]) {
        case "secao1":
            retorno = '<html><head><meta charset="UTF-8"><title>Seção 1</title><body><h1>Olá! Bem vindx a seção 1 da página</h1><p>Essa mensagem foi envida no fim de uma response através de um servidor http criado</p></body><html>';
            break; 
        case "secao2":
            retorno = '<html><head><meta charset="UTF-8"><title>Seção 2</title><body><h1>Olá! Bem vindx a seção 2 da página</h1><p>Essa mensagem foi envida no fim de uma response através de um servidor http criado</p></body><html>';
            break;
        default:
            retorno = '<html><head><meta charset="UTF-8"><title>Teste de requisição</title><body><h1>Olá mundo!</h1><p>Essa mensagem foi envida no fim de uma response através de um servidor http criado</p></body><html>';
        }

    //end devolve para o navegador uma informação ao fim da resposta
    res.end(retorno);
});
console.log("Escutando requisições http na porta " + porta);
server.listen(porta);
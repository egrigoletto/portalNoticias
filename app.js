var app = require('./config/server');
// var rotaNoticias = require('./app/routes/noticias')(app);
// var rotaHome = require('./app/routes/home')(app);
// var rotaIncNoticias = require('./app/routes/form_inclusao_noticia')(app);

app.listen(3000, function(){
    console.log("Servidor express OK, rodando na porta 3000\nEscutando requisições\n");
});
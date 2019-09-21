module.exports.noticias = function (app, req, res) {
    // res.render('noticias/noticias');
    // conexão em mysql é feita em json, na relação "campo: valor"
    var connection = app.config.dbConn();
    var noticiasModel = new app.app.models.noticiasDAO(connection);

    if (connection != null) {
        // connection.query('query','função de callback') //cadê as promisses?
        noticiasModel.getNoticias(function (error, result) {
            // res.send(result);
            // recebe a renderização do banco como se fosse um JSON chamado noticias
            res.render("noticias/noticias", {
                noticias: result
            });
        });
    }
}

module.exports.noticia = function (app, req, res) {
    var connection = app.config.dbConn();
    var noticiasModel = new app.app.models.noticiasDAO(connection)
    var id_noticia = req.query.id_noticia;

    if (connection != null) {
        noticiasModel.getNoticia(id_noticia, function (error, result) {
            // recebe a renderização do banco como se fosse um JSON chamado noticias
            res.render("noticias/noticia", {
                noticia: result
            });
        });
    }
}
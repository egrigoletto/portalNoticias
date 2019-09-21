module.exports.formulario_inclusao_noticia = function(app, req, res) {
    res.render('admin/form_add_noticias', {erros: [], noticia: []});

}

module.exports.formulario_inclusao_noticias_salvar = function(app, req, res, validationResult){
    var connection = app.config.dbConn();
    var noticiasModel = new app.app.models.noticiasDAO(connection);
    var noticia = req.body;
    console.log(noticia)
    const erros = validationResult(req);
    if (erros.array().length == 0){
      noticiasModel.salvarNoticia(noticia, function (error, result){
        // res.render('noticias/noticias', {noticia : result})
        res.redirect('/noticias');
      });
    } else {
      // return res.render('erros/erros',{erros: erros.array()});
      // console.error(erros);
      return  res.render('admin/form_add_noticias',{erros: erros.array(), noticia: noticia});
    }
}
module.exports = function(app){
  const {check, validationResult} = require('express-validator');

    app.get('/form_inc_noticias', function(req, res){
       app.app.controller.admin.formulario_inclusao_noticia(app, req, res);
      });

    app.post('/noticias/salvar',
    [
      check('autor_noticia','Autor é obrigatório').not().isEmpty(),
      check('titulo_noticia','Título é obrigatório').not().isEmpty(),
      check('resumo_noticia','O resumo da notícia é obrigatório').not().isEmpty(),
      check('resumo_noticia','O resumo da notícia é deve conter entre 10 e 100 caracteres').isLength({min: 10, max: 100}),
      check('data_pub_noticia','A data de publicação é obrigatória').not().isEmpty().toDate({format: 'YYYY-MM-DD'}),
      check('texto_noticia','A notícia é obrigatória').not().isEmpty()
    ] ,function(req, res){
      app.app.controller.admin.formulario_inclusao_noticias_salvar(app, req, res, validationResult);
    });

}
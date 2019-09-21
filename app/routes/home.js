module.exports = function (app){
    /*  O método render foi criado por consequência do ejs que foi incorporado ao mecanismo de visualização padrão
   não precisa por a extensão ejs, pois a aplicação já entende que por o visualizador ser ejs, a extensão ejs é aceita */
   app.get('/index', function(req,res){
    var connection = app.config.dbConn();
    var noticiasModel = new app.app.models.noticiasDAO(connection);

     noticiasModel.getUltimas5Noticias(function(error, result){
      if (error){
        console.error('Erro ao retornar notícias: \n' + error)
      } else {
        //mando um json de notícias baseado na result da minha query processada pela função, caso não 
        //um erro será mostrado
        res.render("home/index", {noticias: result});
      }
     });
  });
}
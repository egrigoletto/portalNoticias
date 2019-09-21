// implementação de classe como função
//OBS: tem que ser função e não arraow function 
function NoticiasDAO(connection){
    this._connection = connection;
}

//  as funções abaixo representam propriedades e com elas a chamada de classe vai poder referenciar os métodos
//  através de prototype
NoticiasDAO.prototype.getNoticias = function(callback){
    this._connection.query('Select * From noticias Order By data_pub_noticia desc', callback);
    console.log('getNoticias');
}

NoticiasDAO.prototype.getNoticia = function(id_noticia, callback){
    this._connection.query('Select * From noticias where id_noticia = ' + id_noticia, callback);
    console.log('getNoticia');
}

NoticiasDAO.prototype.getUltimas5Noticias = function (callback){
    this._connection.query('Select * From noticias Order By data_pub_noticia desc limit 5', callback);
    console.log('getUltimas5Noticias');
}

NoticiasDAO.prototype.salvarNoticia = function(noticia, callback){
    this._connection.query('Insert into noticias set ? ', noticia, callback);
    console.log('salvarNoticia');
}

module.exports = function(){
    return NoticiasDAO;
}
var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
// var expressValidator = require('express-validator');
// deprected, agora o express validator foi convertido em outra coisa
// const {check, validationResult} = require('express-validator');
var app = express();
var consignApp = consign();


// converte o body de uma página para json
app.use(bodyParser.urlencoded({extended: true}));

//define um caminho com informações estáticas para que seja acessado por todo o nível da aplicação
app.use(express.static('./app/teste'));

//o static não achou no diretório mostrado acima e foi para o próximo para carregar as informações estáticas
app.use(express.static('./app/public'));

//configura validadores para o express-validator, ele é incluso como middleware
// app.use(expressValidator());
/* Modelo para o validador abaixo: 
https://express-validator.github.io/docs/

const { check, validationResult } = require('express-validator');

app.post('/user', [
  // username must be an email
  check('username').isEmail(),
  // password must be at least 5 chars long
  check('password').isLength({ min: 5 })
], (req, res) => {
  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
*/


//define o motor de visualização padrão para o ejs, ou seja, define que o ejs vai renderizar as páginas que forem acessadas pelo express dessa aplicação
app.set('view engine', 'ejs');

//define a rota de views padrão
app.set('views', './app/views');
//app.set(<propriedade>,<parâmetro>)


//mapeia tudo que está pasta de rotas e avisa o express
consignApp
    .include('app/routes')
    .then('config/dbConn.js')
    .then('/app/models')
    .then('/app/controller')
    .into(app);

module.exports = app;
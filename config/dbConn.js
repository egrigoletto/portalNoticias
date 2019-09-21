var mysql = require('mysql');

const mysqlFCon = () => {
    var connection = mysql.createConnection({
        // edita JSON
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: '',
        database: 'portal_noticias'
      });
      return connection;
}

module.exports = () => {
  return mysqlFCon;
}

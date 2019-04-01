var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    username: 'root',
    password: '',
    database: 'mydb'
});

con.connect(function(err){
   if(err) throw err;
   console.log('Connected');
   var sql = 'SELECT name, address FROM customers';
   con.query(sql, function(err, result, fields){
      if(err) throw err;
      console.log(result);
   });
});
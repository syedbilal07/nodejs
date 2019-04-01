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
    // The third parameter of the callback function is an array containing information about each field
    // in the result.
   con.query(sql, function(err, result, fields){
      if(err) throw err;
      console.log(fields);
   });
});
var mysql = require('mysql');
var sql = require('sql');

var con = mysql.createConnection({
   host: 'localhost',
   username: 'root',
   password: ''
});

con.connect(function(err){
   if(err) throw err;
   console.log('Connected');
   // Throwing Errors Of Empty Statement Because I'm Not Modying Anything!
   // con.query(sql, function(err, result){
   //    if(err) throw err;
   //    console.log('Result : ' + result);
   // });
});
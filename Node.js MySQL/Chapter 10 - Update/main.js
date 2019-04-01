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
   var sql = "UPDATE customers SET ADDRESS = 'CANYON 123' WHERE address = 'Valley 345'";
   con.query(sql, function(err, result){
       if(err) throw err;
       console.log(result.affectedRows + " Record(s) Updated");
   })
});
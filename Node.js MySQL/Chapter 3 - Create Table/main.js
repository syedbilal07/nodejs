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
   var sql = "CREATE TABLE products(id INT AUTO_INCREMENT PRIMARY KEY,name VARCHAR(255))";
   // If the table already exists, use the ALTER TABLE keyword:
    // var sql = "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
   con.query(sql, function(err, result){
      if(err) throw err;
      console.log('Table Created');
   });
});
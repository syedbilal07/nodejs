var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    username: 'root',
    password: '',
    database: 'mydb'
});
// Use the '%' wildcard to represent zero, one or multiple characters:

con.connect(function(err){
    if(err) throw err;
    console.log('Connected');
    var sql = 'SELECT * FROM customers WHERE address LIKE "S%"';
    con.query(sql, function(err, result, fields){
        if(err) throw err;
        console.log(result);
    });
});
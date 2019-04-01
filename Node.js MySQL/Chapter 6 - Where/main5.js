var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    username: 'root',
    password: '',
    database: 'mydb'
});

// If you have multiple placeholders, the array contains multiple values, in that order:

con.connect(function(err){
    if(err) throw err;
    console.log('Connected');
    var adr = 'Mountain 21';
    var name = 'Amy'
    var sql = 'SELECT * FROM customers WHERE name = ? OR address = ?';
    con.query(sql, [name, adr], function(err, result){
        if(err) throw err;
        console.log(result);
    });
});
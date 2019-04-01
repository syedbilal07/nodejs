var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    username: 'root',
    password: '',
    database: 'mydb'
});

// You can also use a ? as a placeholder for the values you want to escape.

// In this case, the variable is sent as the second parameter in the query() method:

// Escape query values by using the placeholder ? method:

con.connect(function(err){
    if(err) throw err;
    console.log('Connected');
    var adr = 'Mountain 21';
    var sql = 'SELECT * FROM customers WHERE address = ?';
    con.query(sql, [adr], function(err, result){
        if(err) throw err;
        console.log(result);
    });
});
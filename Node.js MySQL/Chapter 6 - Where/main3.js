var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    username: 'root',
    password: '',
    database: 'mydb'
});

// When query values are variables provided by the user, you should escape the values.

// This is to prevent SQL injections, which is a common web hacking technique to destroy or misuse your database.

// The MySQL module has methods to escape query values:

// Escape query values by using the mysql.escape() method:

con.connect(function(err){
    if(err) throw err;
    console.log('Connected');
    var adr = 'Mountain 21';
    var sql = 'SELECT * FROM customers WHERE address = ' + mysql.escape(adr);
    con.query(sql, function(err, result, fields){
        if(err) throw err;
        console.log(result);
    });
});
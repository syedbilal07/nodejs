var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    username: 'root',
    password: '',
    database: 'mydb'
});

// These two tables can be combined by using users' favorite_product field and products' id field.

// NOTE: You can use INNER JOIN instead of JOIN. They will both give you the same result.

con.connect(function(err){
    if(err) throw err;
    console.log('Connected');
    var sql = "SELECT users.name AS user, products.name AS favourite FROM users JOIN products ON users.favorite_product = products.id";;
    con.query(sql, function(err, result){
        if(err) throw err;
        console.log(result);
    });
})
var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    username: 'root',
    password: '',
    database: 'mydb'
});

// If you want to return all users, no matter if they have a favorite product or not, use the LEFT JOIN statement:

con.connect(function(err){
    if(err) throw err;
    console.log('Connected');
    var sql = "SELECT users.name AS user, products.name AS favourite FROM users LEFT JOIN products ON users.favorite_product = products.id";;
    con.query(sql, function(err, result){
        if(err) throw err;
        console.log(result);
    });
})
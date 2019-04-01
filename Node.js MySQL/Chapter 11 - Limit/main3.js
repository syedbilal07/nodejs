var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"
});
// You can also use write your SQL statement like this "LIMIT 2, 5" which returns the same as the
// offset example above:

// Sart from position 3, and return the next 5 records:

con.connect(function(err) {
    if (err) throw err;
    var sql = "SELECT * FROM customers LIMIT 2, 5";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});
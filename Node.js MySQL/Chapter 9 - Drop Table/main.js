var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"
});

con.connect(function(err) {
    if (err) throw err;
    // If the the table you want to delete is already deleted, or for any other reason does not exist,
    // you can use the IF EXISTS keyword to avoid getting an error.
    var sql = "DROP TABLE IF EXISTS customers";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table deleted");
    });
});
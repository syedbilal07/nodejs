var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"
});

// If you want to return five records, starting from the third record, you can use the "OFFSET" keyword:

// Start from position 3, and return the next 5 records

//NOTE : "OFFSET 2", means starting from the third position, not the second!


con.connect(function(err) {
    if (err) throw err;
    var sql = "SELECT * FROM customers LIMIT 5 OFFSET 2";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});
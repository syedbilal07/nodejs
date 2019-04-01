var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    username: 'root',
    password: '',
    database: 'mydb'
});

// For tables with an auto increment id field, you can get the id of the row you just inserted by
// asking the result object.

//NOTE: To be able to get the inserted id, only one row can be inserted.

con.connect(function(err){
    if(err) throw err;
    console.log('Connected');
    var sql = "INSERT INTO customers(name, address) VALUES ('Michelle', 'Broadway Road')";
    // Note : To be able to get the inserted id, only one row can be inserted.
    con.query(sql, function(err, result){
        if(err) throw err;
        console.log("1 Record Inserted, ID : " + result.insertId);
    });
})
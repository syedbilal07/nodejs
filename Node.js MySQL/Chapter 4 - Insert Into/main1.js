var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    username: 'root',
    password: '',
    database: 'mydb'
});

con.connect(function(err){
    if(err) throw err;
    console.log('Connected');
    var sql = "INSERT INTO customers(name, address) VALUES('bilal', 'A-40, Rufi Heaven, Gulshan-e-Iqbal, Karachi')";
    con.query(sql, function(err, result){
       if(err) throw err;
       console.log("Record Inserted");
    });
})
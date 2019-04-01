var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    username: 'root',
    password: '',
    database: 'mydb'
});
// To insert more than one record, make an array containing the values, and insert a question mark in the sql,
// which will be replaced by the value array:
con.connect(function(err){
    if(err) throw err;
    console.log('Connected');
    var sql = "INSERT INTO customers(name, address) VALUES ?";
    var values = [
        ['Ali Suhaib', 'Highway 71'],
        ['Ahmer Khan', 'Lowstreet 4'],
        ['Ammar Asim', 'Apple st 652'],
        ['Talha Hameed', 'Mountain 21'],
        ['Asif Hussain', 'Valley 345'],
        ['Hashir Asif', 'Ocean blvd 2'],
        ['Atif Hussain', 'Green Grass 1'],
        ['Asif Ali', 'Sky st 331'],
        ['Zakir Hussain', 'One way 98'],
        ['John Wick', 'Yellow Garden 2'],
        ['Ben Afflick', 'Park Lane 38'],
        ['William Shakespeare', 'Central st 954'],
        ['Chunk', 'Main Road 989'],
        ['Viola', 'Sideway 1633']
    ];
    con.query(sql, [values], function(err, result){
        if(err) throw err;
        console.log("Number Of Records Inserted : " + result.affectedRows);
    });
})
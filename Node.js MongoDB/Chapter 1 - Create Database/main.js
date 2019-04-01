var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

// To create a database in MongoDB, start by creating a MongoClient object, then specify a connection URL
// with the correct ip address and the name of the database you want to create.

// MongoDB will create the database if it does not exist, and make a connection to it.

MongoClient.connect(url, function(err, db){
    if(err) throw err;
    console.log('Database Created');
    db.close();
});

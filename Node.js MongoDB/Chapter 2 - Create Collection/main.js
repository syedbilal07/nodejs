var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

//NOTE: A collection in MongoDB is the same as a table in MySQL

// To create a collection in MongoDB, use the createCollection() method:

MongoClient.connect(url, function(err, db){
    if(err) throw err;
    db.createCollection("customers", function(err, res){
        if(err) throw err;
        console.log('Collection Created');
        db.close();
    });
});
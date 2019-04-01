var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";
// To select data from a table in MongoDB, we can also use the find() method.

// The find() method returns all occurrences in the selection.

// The first parameter of the find() method is a query object.
// In this example we use an empty query object, which selects all documents in the collection.

//NOTE: No parameters in the find() method gives you the same result as SELECT * in MySQL.

MongoClient.connect(url, function(err, db){
    if(err) throw err;
    db.collection("customers").find({}).toArray(function(err, res) {
        if(err) throw err;
        console.log(res);
        db.close();
    });
});
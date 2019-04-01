var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

// You can also use the dropCollection() method to delete a table (collection).

// The dropCollection() method takes two parameters: the name of the collection and a callback function.

MongoClient.connect(url, function (err, db) {
    if(err) throw err;
    db.dropCollection("customers", function (err, delOk) {
        if(err) throw err;
        if(delOk) console.log('Document Deleted');
        db.close();
    });
});
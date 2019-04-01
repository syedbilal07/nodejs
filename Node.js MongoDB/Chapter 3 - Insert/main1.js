var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

// To insert a record, or document as it is called in MongoDB, into a collection, we use the insertOne() method.

// NOTE: A document in MongoDB is the same as a record in MySQL

// The first parameter of the insertOne() method is an object containing the name(s) and value(s)
// of each field in the document you want to insert.

// It also takes a callback function where you can work with any errors, or the result of the insertion:

MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var myobj = { name: "Company Inc", address: "Highway 37"};
    // If you try to insert documents in a collection that do not exist,
    // MongoDB will create the collection automatically
    db.collection("customers").insertOne(myobj, function(err, res){
        if(err) throw err;
        console.log("1 Document Inserted");
        db.close();
    });
});
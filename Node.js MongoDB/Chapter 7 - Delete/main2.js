var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

// To delete more than one document, use the deleteMany() method.

// The first parameter of the deleteMany() method is a query object defining which documents to delete.

// Delete all documents were the address starts with the letter "O":

MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var query = {address: /^O/};
    db.collection("customers").deleteMany(query, function(err, obj){
        if(err) throw err;
        console.log(obj.result.n + " Document(s) Deleted");
        db.close();
    });
});
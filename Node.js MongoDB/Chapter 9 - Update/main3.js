var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

// To update all documents that meets the criteria of the query, use the updateMany() method.

MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var myquery = { address: /^S/ };
    var newvalues = { $set: { name: 'Minnie'} };
    db.collection("customers").updateOne(myquery, newvalues, function(err, res){
        if (err) throw err;
        console.log(res.result.nModified + " Document(s) Updated");
        db.close();
    });
});
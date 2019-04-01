var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

// To update only selected fields, use the $set operator to prevent the other fields
// from being left empty:

// Update the address from "Valley 345" to "Canyon 123":

MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var myquery = { address: "Valley 345" };
    var newvalues = { $set: {address: 'Canyon 123'} }
    db.collection("customers").updateOne(myquery, newvalues, function(err, res){
        if (err) throw err;
        console.log("1 Document Updated");
        db.close();
    });
});
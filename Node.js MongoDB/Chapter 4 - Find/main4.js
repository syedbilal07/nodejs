var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";
// The second parameter of the find() method is an object describing which fields to include in the result.

// This parameter is optional, and if omitted, all fields will be included in the result.

MongoClient.connect(url, function(err, db){
    if(err) throw err;
    db.collection("customers").find({}, {_id: false}).toArray(function(err, res) {
        if(err) throw err;
        console.log(res);
        db.close();
    });
});
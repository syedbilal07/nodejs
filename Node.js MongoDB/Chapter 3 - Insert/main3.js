var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

// If you do not specify an _id field, then MongoDB will add one for you and assign a
// unique id for each document.

// In the example above no _id field was specified, and as you can see from the result object,
// MongoDB assigned a unique _id for each document.

// If you do specify the _id field, the value must be unique for each document:

MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var myobj = [
        { _id: 154, name: 'Chocolate Heaven'},
        { _id: 155, name: 'Tasty Lemon' },
        { _id: 156, name: 'Vanilla Dream'}
    ];
    db.collection("customers").insertMany(myobj, function(err, res){
        if(err) throw err;
        console.log(res);
        db.close();
    });
});
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

// To limit the result in MongoDB, we use the limit() method.

// The limit() method takes one parameter, a number defining how many documents to return.

// Limit the result to only return 5 documents:

MongoClient.connect(url, function(err, db){
   if(err) throw err;
   db.collection("customers").find().limit(5).toArray(function(err, res){
       if(err) throw err;
       console.log(res);
       db.close();
   });
});
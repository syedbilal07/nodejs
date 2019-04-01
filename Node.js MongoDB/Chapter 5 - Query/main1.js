var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

// When finding documents in a collection, you can filter the result by using a query object.

// The first argument of the find() method is a query object, and is used to limit the search.

MongoClient.connect(url, function(err, db){
   if(err) throw err;
   var query = {address: "Park Lane 38"};
   db.collection("customers").find(query).toArray(function(err, res){
       if(err) throw err;
       console.log(res);
       db.close();
   });
});

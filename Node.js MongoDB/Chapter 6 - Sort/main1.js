var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

// Use the sort() method to sort the result in ascending or descending order.

// The sort() method takes one parameter, an object defining the sorting order.

MongoClient.connect(url, function(err, db){
   if(err) throw err;
   var mysort = { name: 1};
   db.collection("customers").find().sort(mysort).toArray(function(err, res){
      if(err) throw err;
      console.log(res);
      db.close();
   });
});
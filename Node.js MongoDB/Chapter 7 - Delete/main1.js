var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

// To delete a record, or document as it is called in MongoDB, we use the deleteOne() method.

// The first parameter of the deleteOne() method is a query object defining which document to delete.

// NOTE: If the query finds more than one document, only the first occurrence is deleted.

MongoClient.connect(url, function(err, db){
   if(err) throw err;
   var query = {address: 'Mountain 21'};
   db.collection("customers").deleteOne(query, function(err, obj){
       if(err) throw err;
       console.log("Record Deleted");
       db.close();
   });
});
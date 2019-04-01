var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

// You can update a record, or document as it is called in MongoDB,
// by using the updateOne() method.

// The first parameter of the updateOne() method is a query object defining
// which document to update.

// NOTE: If the query finds more than one record, only the first occurrence is updated.

// The second parameter is an object defining the new values of the document.
// By default, all fields in the document gets updated, (except the _id field)
// so remember to set the value of every field, otherwise the value will be left empty.

MongoClient.connect(url, function(err, db){
   if(err) throw err;
   var myquery = { address: "Valley 345" };
   var newvalues = { name: "Mickey", address: "Canyon 123" };
   db.collection("customers").updateOne(myquery, newvalues, function(err, res){
       if (err) throw err;
       console.log("1 Document Updated");
       db.close();
   });
});
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

// You can delete a table, or collection as it is called in MongoDB,
// by using the drop() method.

// The drop() method takes a callback function containing the error object
// and the result parameter which returns true if the collection was dropped successfully,
// otherwise it returns false.

MongoClient.connect(url, function (err, db) {
   if(err) throw err;
   db.collection("customers").drop(function (err, delOk) {
       if(err) throw err;
       if(delOk) console.log('Document Deleted');
       db.close();
   });
});
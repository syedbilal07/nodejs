var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

// You can write regular expressions to find exactly what you are searching for.

// NOTE: Regular expressions can only be used to query strings.

// To find only the documents where the "address" field starts with the letter "S", use the regular expression /^S/:

MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var query = {address: /^S/};
    db.collection("customers").find(query).toArray(function(err, res){
        if(err) throw err;
        console.log(res);
        db.close();
    });
});

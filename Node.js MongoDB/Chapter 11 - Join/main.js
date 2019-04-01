var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

// MongoDB is not a relational database, but you can perform a left outer join by using
// the $lookup stage.

// The $lookup stage lets you specify which collection you want to join with the current collection,
// and which fields that should match.

// Limit the result to only return 5 documents:

MongoClient.connect(url, function(err, db){
    if(err) throw err;
    db.collection('orders').aggregate([
        {
            $lookup:
                {
                    from: 'products',
                    localField: 'product_id',
                    foreignField: '_id',
                    as: 'orderdetails'
                }
        }
    ], function(err, res){
        if (err) throw err;
        console.log(JSON.stringify(res));
        db.close();
    });
});
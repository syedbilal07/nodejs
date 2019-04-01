var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

// To insert multiple documents into a collection in MongoDB, we use the insertMany() method.

// The first parameter of the insertMany() method is an array of objects, containing the data you want to insert.

// It also takes a callback function where you can work with any errors, or the result of the insertion

MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var myobj = [
        { name: 'John', address: 'Highway 71'},
        { name: 'Peter', address: 'Lowstreet 4'},
        { name: 'Amy', address: 'Apple st 652'},
        { name: 'Hannah', address: 'Mountain 21'},
        { name: 'Michael', address: 'Valley 345'},
        { name: 'Sandy', address: 'Ocean blvd 2'},
        { name: 'Betty', address: 'Green Grass 1'},
        { name: 'Richard', address: 'Sky st 331'},
        { name: 'Susan', address: 'One way 98'},
        { name: 'Vicky', address: 'Yellow Garden 2'},
        { name: 'Ben', address: 'Park Lane 38'},
        { name: 'William', address: 'Central st 954'},
        { name: 'Chuck', address: 'Main Road 989'},
        { name: 'Viola', address: 'Sideway 1633'}
    ];
    db.collection("customers").insertMany(myobj, function(err, res){
        if(err) throw err;
        console.log("Number Of Documents Inserted : " + res.insertedCount);
        db.close();
    });
});
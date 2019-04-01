var express = require('express');
var app = express();
var fs = require("fs");
var id = 2; // For Deletion Purpose
// New User
var user = {
    "user4": {
        "Name": "Ammar",
        "Profession": "Contractor",
        "id": 4
    }
}

// Fetching Users In JSON Format
app.get('/listUsers', function(req, res){
    fs.readFile(__dirname + '/' + 'users.json', 'utf8', function(err,data){
        console.log(data);
        res.end(data);
    });
})
// Adding New User
app.post('/addUser', function(req, res){
    // First read existing users.
    fs.readFile(__dirname + '/' + 'users.json', 'utf8', function(err,data){
        data = JSON.parse(data);
        data["user4"] = user["user4"];
        console.log(data);
        res.end(JSON.stringify(data));
    });
})
// Get User By ID
app.get('/:id', function(req, res){
    // First read existing users.
    fs.readFile(__dirname + '/' + 'users.json', 'utf8', function(err,data){
       users = JSON.parse(data);
       user = users["user" + req.params.id];
       console.log(user);
       res.end(JSON.stringify(user));
    });
})
// Delete User
app.delete('/deleteUser', function (req, res) {

    // First read existing users.
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
        if(err)
        {
            console.log(err);
        }
        else
        {
            data = JSON.parse(data);
            delete data["user" + 2];
            console.log(data);
            res.end(JSON.stringify(data));
        }
    });
})


var server = app.listen(8081, function(){
    var host = server.address().address
    var port = server.address().port

    console.log("Server Running At : ", host, port);
})

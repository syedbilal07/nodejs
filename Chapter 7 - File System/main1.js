// Synchronous vs Asynchronous

var fs = require('fs');

// Asynchronous read
fs.readFile('input.txt', function(err,data) {
    if (err)
    {
        return console.log(err);
    }
    console.log("Asynchronous Read : " + data.toString());
});

// Synchronous read
var data = fs.readFileSync('input.txt');

console.log("Synchronous Read : " + data.toString());

console.log("Program Ended");
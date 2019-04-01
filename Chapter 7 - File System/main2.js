// Open a File

var fs = require('fs');

// Asynchronous - Opening File
console.log("Going To Open file");

fs.open('input.txt', 'r+', function(err,data){
    if(err)
    {
        return console.log(err);
    }
    console.log("File Opened Successfully");
});
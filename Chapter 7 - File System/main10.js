// Read a Directory

var fs = require('fs');

console.log("Going To Read Directory");

fs.readdir('J:\\Bilal\\Aptech\\Tutorials Point Practice\\Node.js\\Chapter 7 - File System\\tmp', function(err , files){
    if (err)
    {
        return console.error(err);
    }
    files.forEach(function(file){
       console.log(file);
    });

});
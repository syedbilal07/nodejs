// Create a Directory

var fs = require("fs");
console.log("Going To Create Directory");

fs.mkdir('J:\\Bilal\\Aptech\\Tutorials Point Practice\\Node.js\\Chapter 7 - File System\\tmp', function(err)
{
    if (err)
    {
        return console.error(err);
    }
    console.log("Directory Created Successfully!");
});


// Delete a File

var fs = require("fs");

console.log("Going To Delete An Existing File");
fs.unlink('input.txt', function(err)
{
    if (err)
    {
        return console.error(err);
    }
    console.log("File Deleted Successfully!");
});
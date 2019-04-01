// Writing a File

var fs = require('fs');

console.log("Going To Write To Existing File");

fs.writeFile('input.txt', 'Simply Easy Learning!', function(err){
    if(err)
    {
        return console.log(err);
    }
    console.log("Data Written Successfully");
    console.log("Let's Read Newly Written Data");
    fs.readFile('input.txt', function(err,data){
        if(err)
        {
            return console.log(err);
        }
        console.log("Asynchronous Read: " + data.toString());
    });
});
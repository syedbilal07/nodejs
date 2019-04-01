// Get File Information

var fs = require('fs');

console.log("Going To Get File Information");

fs.stat('input.txt', function(err, stats){
    if(err)
    {
        return console.log(err);
    }
    console.log(stats);
    console.log('Got File Information Successfully');
    console.log("isFile() ? : " + stats.isFile());
    console.log("isDirectory() ? : " + stats.isDirectory());
});

// Reading a File

var fs = require('fs');

var buff = new Buffer(1024);

console.log("Going To Open Existing File");

fs.open('input.txt', 'r+', function(err, fd)
{
    if(err)
    {
        return console.log(err);
    }
    console.log("File Opened Successfully");
    console.log("Going To Read File");

    fs.read(fd, buff, 0,  buff.length, 0, function(err ,bytes)
    {
        if(err)
        {
            return console.log(err);
        }
        console.log(bytes + ' Bytes Read');
        // Print only read bytes to avoid junk.
        if(bytes > 0)
        {
            console.log(buff.slice(0, bytes).toString());
        }
    });
});


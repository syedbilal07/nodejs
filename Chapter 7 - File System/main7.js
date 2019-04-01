// Truncate a File

var fs = require('fs');
var buff = new Buffer(1024);

console.log("Going To Open An Existing File");
fs.open('input.txt', 'r+', function(err, fd){
   if(err)
   {
       return console.log(err);
   }
   console.log('File Opened Successfully');
   console.log('Going To Truncate File After 10 Bytes');
   fs.ftruncate(fd, 10, function(err){
       if(err)
       {
           return console.log(err);
       }
       console.log("File Truncated Sucessfully");
       console.log("Going To Read The Same File Again");

       fs.read(fd, buff, 0, buff.length, 0, function(err,bytes){
           if(err)
           {
               return console.log(err);
           }
           // Print only read bytes to avoid junk.
           if(bytes > 0)
           {
               console.log(buff.slice(0, bytes).toString());
           }
           // Close the opened file.
           fs.close(fd, function(err){
               if(err)
               {
                   return console.log(err);
               }
               console.log("File Closed Successfully");
           });
       });
   });

});



var fs = require('fs');

fs.unlink('mynewfile.txt', function(err){
   if(err) throw err;
   console.log('File Deleted');
});
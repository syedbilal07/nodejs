var fs = require('fs');

fs.rename('mynewfile.txt', 'myfile.txt', function(err){
   if(err) throw err;
   console.log('Renamed');
});
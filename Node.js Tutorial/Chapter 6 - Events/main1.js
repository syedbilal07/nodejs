var fs = require('fs');
var rs = fs.createReadStream('./inputfile.txt');

rs.on('open', function(){
    console.log('The File Is Open');
});
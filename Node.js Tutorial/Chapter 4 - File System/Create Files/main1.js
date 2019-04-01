var fs = require('fs');

fs.appendFile('myfile.txt', 'Hello Node.js!' , function(err){
    if(err) throw err;
    console.log('Saved');
});
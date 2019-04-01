var fs = require('fs');

fs.writeFile('mynewfile.txt', 'Hello Node! :)', function(err){
    if(err) throw err;
    console.log('Saved');
});
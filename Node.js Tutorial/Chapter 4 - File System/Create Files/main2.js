var fs = require('fs');

fs.open('mynewfile.txt', 'w', function(err){
    if(err) throw err;
    console.log('Saved');
});
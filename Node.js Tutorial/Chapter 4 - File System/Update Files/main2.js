// Replace the content of the file "mynewfile3.txt":

var fs = require('fs');

fs.writeFile('mynewfile3.txt', 'This is my text', function (err) {
    if (err) throw err;
    console.log('Replaced!');
});
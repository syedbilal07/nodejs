var fs = require('fs');

fs.readFile('Blocking Code.txt', function(err, data){
	if(err) console.log('Error Reading File');
	console.log(data.toString());
});
console.log("Program Ended");
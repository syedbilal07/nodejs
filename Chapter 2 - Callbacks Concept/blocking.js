var fs = require("fs");

var data = fs.readFileSync("Blocking Code.txt");

console.log(data.toString());

console.log("Program Ended");
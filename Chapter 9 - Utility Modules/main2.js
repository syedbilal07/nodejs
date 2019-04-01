var path = require("path");

// Normalization
console.log("Normalization :" + path.normalize('/test/test1//2slashes/1slash/tab/..'));

// Join
console.log('Joint Path : ' + path.join('/test', 'test1', '2slashes/1slash', 'tab', '..'));

// Resolve
console.log('Resolve : ' + path.resolve('main.js'));

// extName
console.log('Ext Name : ' + path.extname('main.js'));
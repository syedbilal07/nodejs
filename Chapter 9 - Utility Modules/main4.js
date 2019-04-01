var net = require("net");

var client = net.connect({port : 8080}, function(){
    console.log("Connected To Server On Port 8080");
});

client.on('data', function(data){
    console.log(data.toString());
    client.end();
});

client.on('end', function(){
    console.log("Disconnected From Server");
});
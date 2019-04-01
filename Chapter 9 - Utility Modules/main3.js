var net = require("net");

var server = net.createServer(function(connection){
    console.log("Client Connected");

    connection.on('end', function(){
        console.log("Client Disconnected");
    });
    connection.write("Hello World \n");
    connection.pipe(connection);
});

server.listen(8080, function(){
    console.log("Server Is Listening On 8080 Port");
});
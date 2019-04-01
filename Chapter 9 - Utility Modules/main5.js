var dns = require("dns");

dns.lookup('www.google.com', function onLookup(err, address, family){
    console.log('Address : ' + address);

    dns.reverse(address, function(err, hostnames){
       if(err)
       {
           return console.log(err.stack);
       }
       console.log("Reverse For " + address + " Is : " + JSON.stringify(hostnames));
    });
});

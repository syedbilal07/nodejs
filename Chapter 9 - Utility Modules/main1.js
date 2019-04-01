var os = require("os");

// Temporary Directory
console.log("Temporary Directory Is : " + os.tmpdir());

// Endianness
console.log("Endianness Is : " + os.endianness());

// Hostname
console.log("Endianness Is : " + os.hostname());

// Type
console.log("OS Type Is : " + os.type());

// Platform
console.log("OS Platform Is : " + os.platform());

// Architecture
console.log("OS Architecture Is : " + os.arch());

// Release
console.log("OS Release Is : " + os.release());

// Uptime
console.log("OS Uptime Is : " + os.uptime());

// Total Memory
console.log("OS Total Memory Is : " + os.totalmem());

// Free Memory
console.log("OS Free Memory Is : " + os.freemem());

// Network Interfaces
console.log("Network Interfaces Connected : " + os.networkInterfaces());



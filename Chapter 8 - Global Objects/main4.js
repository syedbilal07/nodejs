console.info("Program Started");

var counter = 10;
console.log("Counter: %d", counter);

console.time("Getting Data");
// Some Processing For Data
var a = 0;
while(a < 10)
{
    console.log('Value Of a Is : ' + a++ + '\n');
}
console.log('Data Fetched');

console.info("Program Ended")
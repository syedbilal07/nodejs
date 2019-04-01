// Writing to Buffers
console.log('Writing To Buffers \n');
var buff1 = new Buffer(256);
var len = buff1.write("Simply Easy Learning");
console.log("Octects Written : " + len);
console.log('\n');
// Reading from Buffers
console.log('Reading From Buffers \n');
var buff2 = new Buffer(26);
for(var i =0; i < 26; i++)
{
    buff2[i] = i + 97;
}
console.log( buff2.toString('ascii'));       // outputs: abcdefghijklmnopqrstuvwxyz
console.log( buff2.toString('ascii',0,5));   // outputs: abcde
console.log( buff2.toString('utf8',0,5));    // outputs: abcde
console.log( buff2.toString(undefined,0,5)); // encoding defaults to 'utf8', outputs abcde

// Convert Buffer to JSON
console.log('Convert Buffer to JSON \n');
var buff3 = new Buffer('Simply Easy Learning');
var json = buff3.toJSON(buff3);

console.log(json);
console.log('\n');
// Concatenate Buffers
console.log('Concatenate Buffers \n');
var buffer1 = new Buffer('TutorialsPoint ');
var buffer2 = new Buffer('Simply Easy Learning');
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log("buffer3 content: " + buffer3.toString());
console.log('\n');
// Compare Buffers
console.log('Compare Buffers \n');
var buffering1 = new Buffer('ABC');
var buffering2 = new Buffer('ABCD');
var result = buffering1.compare(buffering2);

if(result < 0) {
    console.log(buffering1 +" comes before " + buffering2);
}else if(result == 0){
    console.log(buffering1 +" is same as " + buffering2);
}else {
    console.log(buffering1 +" comes after " + buffering2);
}
console.log('\n');
// // Copy Buffer
console.log('Copy Buffer \n');
var buffer4 = new Buffer('ABC');

//copy a buffer
var buffer5 = new Buffer(3);
buffer4.copy(buffer5);
console.log("buffer5 content: " + buffer5.toString());
console.log('\n');
// Slice Buffer
console.log('Slice Buffer \n');
var buffer6 = new Buffer('TutorialsPoint');

//slicing a buffer
var buffer7 = buffer6.slice(0,9);
console.log("buffer7 content: " + buffer7.toString());
console.log('\n');
// Buffer Length
console.log('Buffer Length \n');
var buffer = new Buffer('TutorialsPoint');

//length of the buffer
console.log("buffer length: " + buffer.length);
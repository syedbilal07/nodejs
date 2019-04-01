process.on('exit', function(code)
{
    // Following code will never execute.
    setTimeout(function(){
       console.log("This Will Not Run");
    }, 0);
    console.log("About To Exit With Exit Code : ", code);
});
console.log("Program Ended");
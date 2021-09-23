var fs = require('fs');
var someData = "welcome to the world of streams";

//create a writable stream
var writeStream = fs.createWriteStream('sample5.txt');

//write the dta to stream with encoding to be utf8
writeStream.write(someData, 'UTF8');

//mark the end of the file
writeStream.end();

//handle stream events => finish, and error
writeStream.on('finish', function(){
    console.log("write Completed");
});

writeStream.on('error', function(err){
    console.log(err.stack);
})

//console.log('program ended');
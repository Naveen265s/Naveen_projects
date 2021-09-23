//streams: readablestreams, writable streams, duplex streams(both read and write), transform
//stream are instances of event emitter, deals with 4 types of events
//data:event, if some data exists to read
//end:event, reached the end of the file
//error:event, evnets whil reading/writing
//finish:event, flush the underlying system

var fs = require('fs');
var str = "";

//create a readable stream
var readerStream = fs.createReadStream('sample.txt');

//set the encoding to be utf8
readerStream.setEncoding('UTF8');

//handle stream events --> data, end and error
readerStream.on('data', function(chunk){
    str += chunk;
});

readerStream.on('end', function(){
    console.log(str);
});

readerStream.on('error', function(err){
    console.log(err.stack);
});

console.log("Program Ended");
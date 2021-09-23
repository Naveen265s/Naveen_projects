//Buffers
//Node provides Buffer class which provides instances to store raw sata similar to n array of integers
//networking

var buff1 = new Buffer.alloc(10);
var myBuffer = Buffer.from([10,20,30,40,50]);
console.log(myBuffer);
var buff2 = new Buffer([10,20,30,40,50]); //Buffer.form()
var buff3 = new Buffer("Sample Data", "utf-8");
buff4 = new Buffer(256);
len = buff4.write("Hello");
console.log("Octets written : " + len);
buff = new Buffer(26);
for(var i=0; i<26; i++){
    buff[i] = i+97;
}
console.log(buff.toString('ascii'));  //outputs: atoz
console.log(buff.toString('ascii', 0, 5));  //outputs: abcde
console.log(buff.toString('utf8',0,5));  //outputs: abcde
console.log(buff.toString(undefined,0,5));  //encoding defaults to 'utf8, outputs abcde

var json = buff4.toJSON();
console.log(json);
var bufferConcat = Buffer.concat([buff3,buff4]);
console.log("buffer3 content: " + bufferConcat.toString());

var buffer1 = new Buffer('ABC');
var buffer2 = new Buffer('XYZ');
var result = buffer1.compare(buffer2);
if(result < 0){
    console.log(buffer1 + "comes before " + buffer2);
}else if(result === 0){
    console.log(buffer1 + "is same as " + buffer2);
}else{
    console.log(buffer1 = " comes after " + buffer2);
}

//copying
var buffer1 = new Buffer('welcome');
var buffer2 = new Buffer(7);
buffer1.copy(buffer2);

console.log("buffer2 content: " + buffer2.toString());

//slicking a buffer
var buffer3 = buffer1.slice(0,3);
console.log("buffer3 content : " + buffer3.toString());
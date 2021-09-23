//demo on utility modules
//os

var os = require('os');
var path = require('path');
console.log("Os Type : " + os.type());
console.log("total Memory : " + os.totalmem);
console.log("Free Memory : " + os.freemem);
console.log("Platfomr : " + os.platform);
console.log("Architecture : " + os.arch);

console.log(path.resolve("sample.txt"));
console.log("joining path : " + path.join("/public", "/Images"));
console.log("extension of the file sample.txt : " + path.extname("sample.txt"));
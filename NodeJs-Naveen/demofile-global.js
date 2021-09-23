//demo on lobal objects

console.log(__dirname);
console.log(__filename);

function sayHi(){
    console.log("Hi !");
}
setTimeout(sayHi, 2000);
function sayBye(){
    console.log('bye!')
}
var timeout = setTimeout(sayBye, 5000);
clearTimeout(timeout);

console.warn("error occured");
console.time("loop here");
var num=10;
while(num>0){
    console.log(num);
    num--;
}
console.timeEnd("loop here");

console.log(process.argv[0]);

//node yourfilename.js brillio nellore hyderabad
process.argv.forEach(function(element, index,array){
    console.log(index + ":" + element);
})
console.log(process.platform);
console.log(process.execPath);

process.memoryUsage();
process.version
process.cwd();
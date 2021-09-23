//fs - file system
const fs = require('fs');

let data = fs.readFileSync('./2example.js');

console.log(data.toString());
console.log('Program Ended')
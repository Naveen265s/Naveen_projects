var fs = require("fs");
console.log("going to get file information");
fs.stat('sample.txt', function(err, stats){
    if(err){
        return console.error(err);
    }
    console.log(stats);
    console.log("success");
    console.log("isFile ? " + stats.isFile());
    console.log("isDirectory ? " + stats.isDirectory());
    console.log("Size " + stats.size)
});
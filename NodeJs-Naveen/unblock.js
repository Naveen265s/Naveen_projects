const fs = require('fs');
fs.readFile('./First.js', function(err,data){
    if(err){
        console.log(err.toString());
        console.log(data.toString());

    }

})
console.log('program ended');
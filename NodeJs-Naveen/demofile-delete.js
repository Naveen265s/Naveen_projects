var fs = require('fs');

//renaming a file

// fs.rename('sample.txt', 'mySample.txt', function(err){
//     if (err) throw err;
//     console.log('File name has renamed');
// });

// deletinga file
fs.unlink('mySample.txt', function(err){
    if(err) throw err;
    console.log('File has been Deleted');
})
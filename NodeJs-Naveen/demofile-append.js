var fs =require('fs');

fs.writeFile('sample.txt', 'this is sample text', function(err){
    if (err) throw err;
    console.log('completed');
})

// fs.appendFile('sample2.txt', 'Append text into same file', function(err){
//     if (err) throw err;
//     console.log('Saved');
// })

let str = "Good Evening"
fs.open('sample3.txt', 'w', function(err, f){
    if(err){
        return console.error(err);
    }
    fs.writeFile(f,str,function (err){
        if (err) throw err;
        console.log('data saved');
    })
    console.log('File Opend');
})
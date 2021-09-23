const http =require('http');
http.createServer((req,res)=>{
    res.write('hello Node js');
    res.end();
}).listen(8001);
console.log('server is runninng at : 127.0.0.1:8001');

let array = [{ "_id" : ObjectId("611e30bf3723d45f4a177d43"), "name" : "Naveen", "age" : 27 }
{ "_id" : ObjectId("611e30d13723d45f4a177d44"), "name" : "kumar", "age" : 27 }
{ "_id" : ObjectId("611e31a03723d45f4a177d45"), "name" : "Nani", "age" : 27, "city" : "Nellore" }
{ "_id" : 102, "name" : "C", "age" : 27, "city" : "Nellore", "phone" : 987654321 }];
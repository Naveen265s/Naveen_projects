var http = require("http");

http.createServer(function(request,response){
    //send the http header
    //http status: 200 : ok
    //content Type: text/plain
    response.writeHead(200, {'content-type': 'text/plain'});
    //send the response body as "this is a simple"
    response.end('this a simple\n');
}).listen(8081);
//console will print the message
console.log('server running at http://127.0.0.1:8081/');
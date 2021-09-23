const http = require('http'); //and http package to the js file
// const { type } = require('os');
http.createServer(function(request, response){
    //send the htttp Header
    //http Status: 200 : ok
    //content type: text/plain

    response.writeHead(200, {'content-type': 'text/plain'});
    //send the response body as "Hello World"
    response.end('Hello World\n');
}).listen(8100);
//console will print the message
console.log('server running at http://127.0.0.1:8100/');
var http = require('http');
var url = require('url');

//create a server object
http.createServer(function(req,res){
    res.writeHead(200, {'context-type' : 'text/html'}); //add an http header, if the response from the http server is supposed to be displayed 
    res.write(req.url)
    var qstr = url.parse(req.url, true).query;
    var txt = "<br/> Name : " + qstr.name + "<br/> Age : " + qstr.age;
    res.end(txt);
}).listen(8080); //the server object listens on port 8080
console.log('server started...');

//in browser
// http://localhost:8080?name="Naveen"&age=28&city="Nellore"

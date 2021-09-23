var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended:false});


app.use(express.static('public'));

app.use('/images', express.static(__dirname + '/images'))

//get method 
app.get('/', function(req,res){
    res.send("Hello every one!")
})

//get method 
app.get('/index-demoex', function(req, res){
    res.sendFile(__dirname + '/' + "index-demoex.html")
})

app.get('/user', function(req, res){
    // res.send('<p>Fisrt Name: ' + req.query['first_name'] + '</p><p>Last Name: ' + req.query['last_name'] + '</p>')
    myData = {
        firstname: req.query.first_name,
        lastname: req.query.last_name
    }
    res.end(JSON.stringify(myData))
})

app.post('/userpost', urlencodedParser, function(req, res){
    // res.send('<p>Fisrt Name: ' + req.query['first_name'] + '</p><p>Last Name: ' + req.query['last_name'] + '</p>')
    myDataPost = {
        firstname: req.body.first_name,
        lastname: req.body.last_name
    }
    console.log(myDataPost);
    res.end(JSON.stringify(myDataPost));
})


var server = app.listen(8081,function(){
    console.log('server started');
    console.log(server.address().port);
})

//in browser
//localhost:8081
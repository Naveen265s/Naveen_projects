const express = require('express');
const {createProxyMiddleware} = require('http-proxy-middleware');
const config = require('./config');

let proxyTodo;
let proxyUser;

let app = express();
app.get('/',(req,res)=>{
    res.send("Hello Api")
});

proxyUser = createProxyMiddleware({target:config.todo_url,pathRewrite:{'^/user/':'/'}});
app.use('/user/', proxyUser);
proxyTodo = createProxyMiddleware({target:config.todo_url,pathRewrite:{'^/todo/':'/'}});
app.use('/todo/', proxyTodo);


module.exports = app;
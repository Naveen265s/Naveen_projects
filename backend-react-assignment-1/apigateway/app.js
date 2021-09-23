const express = require('express');

const {createProxyMiddleware} = require('http-proxy-middleware');

const config = require('./config');

let app = express();

let proxyPlayers;
let proxyUsers;

app.get('/', (req,res)=>{
    res.send("Sports backend Api Gateway");
})

proxyPlayers = createProxyMiddleware({target:config.players_url, pathRewrite:{'^/players/':'/'}});
app.use('/players/',proxyPlayers);

proxyUsers = createProxyMiddleware({target:config.users_url, pathRewrite:{'^/users/':'/'}});
app.use('/users/',proxyUsers);

module.exports = app;
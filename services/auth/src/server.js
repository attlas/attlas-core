'use strict'; 

const express = require('express');
const session = require('express-session'); 
const cors = require('cors')

// Constants
const HOST = (process.env.STATIC_AUTH_HOSTNAME == undefined)?('127.0.0.1'):(process.env.STATIC_AUTH_HOSTNAME);
const PORT = (process.env.STATIC_AUTH_PORT == undefined)?(80):(process.env.STATIC_AUTH_PORT);
const PORTS = (process.env.STATIC_AUTH_PORTS == undefined)?(443):(process.env.STATIC_AUTH_PORTS);

// App
const app = express();
app.use(session({
    secret: process.env.STATIC_AUTH_SECRET,
    resave: false,
    saveUninitialized: true
}));
app.use(cors());

console.log(process.env)

var OAuth = require('oauthio');
// Initialize the SDK
OAuth.initialize(process.env.STATIC_AUTH_PUBLIC_KEY, process.env.STATIC_AUTH_SECRET_KEY);
//var twitter = OAuth.create('twitter');

// Routers
app.get('/', (req, res) => {
  res.send('Hello world\n<a href="/signin">signin</a>');
});

app.get('/signin', OAuth.auth('google', `http://${HOST}:${PORT}/oauth/redirect`));

app.get('/oauth/redirect', OAuth.redirect(function(result, req, res) {
    if (result instanceof Error) {
        res.status(500).send("error: " + result.message);
    }
    result.me().done(function(me) {
        console.log(me);
        res.status(200).send(JSON.stringify(me));
    });
}));


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
console.log(`Running on https://${HOST}:${PORTS}`);

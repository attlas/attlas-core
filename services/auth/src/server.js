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
    secret: 'gaNyqujJpVA6xEaTCFCTNwAhFn3ajhTaUnFhvuU2gWgz6G6sYAqVEaySepEXu2qaqphQYPNcJPWs3pkxQrsDSgjQrRPbCfj2HdBh4FWn8dC5bgXVKrGPWsPtxmg6XgCk',
    resave: false,
    saveUninitialized: true
}));
app.use(cors());

var OAuth = require('oauthio');
// Initialize the SDK
OAuth.initialize('LrEAX_SoGlaQHhF5Nx25MVoGHyE', 'pxKBe561dI1csTQIWr2VIF9MxkA');
//var twitter = OAuth.create('twitter');

// Routers
app.get('/', (req, res) => {
  res.send('Hello world\n<a href="/signin">signin</a>');
});

app.get('/signin', OAuth.auth('facebook', 'http://46.101.7.84:8080/oauth/redirect'));

app.get('/oauth/redirect', OAuth.redirect(function(result, req, res) {
    if (result instanceof Error) {
        res.send(500, "error: " + result.message);
    }
    result.me().done(function(me) {
        console.log(me);
        res.send(200, JSON.stringify(me));
    });
}));


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
console.log(`Running on https://${HOST}:${PORTS}`);

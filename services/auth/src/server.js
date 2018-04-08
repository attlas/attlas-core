'use strict'; 

const express = require('express');
const helmet = require('helmet');
const session = require('express-session'); 
const sessionFileStore = require('session-file-store')(session);
const csrf = require('csurf');
const cors = require('cors');
const fs = require('fs');
const querystring = require("querystring");
const randomstring = require("randomstring");
const cache = require('memory-cache');
//
// apps modules
const context = require('./context')


// App
const app = express();
app.use(helmet());
app.use(session({
    store: new sessionFileStore({}),
    secret: context.getAuthSecret(),
    name : 'attlas.session.id',
    resave: false,
    saveUninitialized: true
}));
app.use(csrf());
app.use(function(req, res, next) {
  res.locals._csrf = req.csrfToken();
  next();
});

app.use(cors({
  origin: 'http://localhost:4200',
  credentials: true,
  optionsSuccessStatus: 200
}));

/*
app.use(cors({
  exposedHeaders: ['Content-Length', 'X-Foo', 'X-Bar'],
}));

var allowedOrigins = ['http://localhost:3000',
                      'http://yourapp.com'];
app.use(cors({
  origin: function(origin, callback){
    // allow requests with no origin 
    // (like mobile apps or curl requests)
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));
*/

//The first way to mitigate CSRF attacks is to disable cross-origin requests.
// If you're going to allow CORS, only allow it on OPTIONS, HEAD, GET as they are not supposed to have side-effects.

var oauth = require('oauthio');
// Initialize the SDK
oauth.initialize(context.getAuthPublicKey(), context.getAuthSecretKey());
//var twitter = OAuth.create('twitter');

// Top level API entry
var apiRouter = express.Router();
apiRouter.get('/', (req, res) => {
  const v1 = context.buildEndpointUsingBase(req.baseUrl, 'v1');
  res.status(200).json(context.buildResponseData({
    'refs':{
      'latest':v1,
      'v1':v1
    }
  }));
})
// V1 routers
var apiV1Router = express.Router();
// get available endpoints
apiV1Router.get('/', (req, res) => {
  res.status(200).json(context.buildResponseData({
    'refs':{
      'auth':{
        'enum':context.buildEndpointUsingBase(req.baseUrl, 'auth'),
        'status':context.buildEndpointUsingBase(req.baseUrl, 'auth', '${providerId}'),
        'bind':context.buildEndpointUsingBase(req.baseUrl, 'auth', '${providerId}'),
        'unbind':context.buildEndpointUsingBase(req.baseUrl, 'auth', '${providerId}')
      }
    }
  }));
});
// get auth providers status, get list of providers
apiV1Router.get('/auth', (req, res) => {
  var providers = [
    {providerId:'facebook', connected:false},
    {providerId:'linkedin', connected:false},
    {providerId:'github', connected:false},
    {providerId:'stackexchange', connected:false},
    {providerId:'google', connected:false},
    {providerId:'paypal', connected:false},
    {providerId:'twitter', connected:false}
  ];
  providers.forEach(function(provider) {
    provider.connected = false;
    if (req.session.credentials) {
      provider.connected = provider.providerId in req.session.credentials;
    }
  });
  res.status(200).json(context.buildResponseData(providers));
});
//
// authenticate
apiV1Router.get('/auth/:id', function(req, res, next) {
  // TODO process provider id error
  var rs = randomstring.generate({length: 32,charset: 'alphabetic'});
  cache.put(rs, req.query.callback, context.getAuthTimeout(), function(key, value) {
    console.log('[CACHE] ' + key + ' expired');
  });
  oauth.auth(req.params.id, context.buildEndpoint('api', 'v1', 'oauth', 'redirect', rs))(req, res, next);
});
//
// authentication callback
apiV1Router.get('/oauth/redirect/:id', oauth.redirect(function(result, req, res) {
  if (result instanceof Error) {
    res.status(500).send(context.buildResponseCodeMsg(500, result.message));
  }
  //
  const providerId = result.provider;
  const cb = cache.get(req.params.id);
  if (cb) {
    cache.del(req.params.id);
    const credentials = result.getCredentials();
    if (req.session.credentials == undefined){
      req.session.credentials = {}
    }
    req.session.credentials[providerId] = credentials;
    //
    /*
    if (res.session.credentials == undefined){
      res.session.credentials = {}
    }
    res.session.credentials[providerId] = credentials;
    */
    res.redirect(cb);
    /*
    result.me().done(function(me) {
      res.status(200).send(context.buildResponseData(me));
    });
    */
  } else {
    res.status(500).send(context.buildResponseCodeMsg(500, 'Authentication session expired'));
  }
}));

apiRouter.use('/v1', apiV1Router);
app.use('/api', apiRouter);
app.get('/', (req, res) => {
  res.send('Hello world\n<a href="/api/v1/auth/twitter?callback=/">Bind</a>');
});

app.get('/api', function (req, res){
    //var data = JSON.parse(req.body);
    //data contains field "message", containing the message to post
    //const credentials = JSON.parse(fs.readFileSync(reg.session.id, 'utf8'));
    oauth.auth('linkedin', req.session, {
      credentials: req.session.credentials
    })
//    oauth.auth('facebook', req.session)
        .then(function (request_object) {
            console.log(request_object);
            return request_object.get('/v2/me', {
//                message: 'test'
//                message: data.message
            });
        })
        .then(function (r) {
           res.status(200).send('<pre>' + JSON.stringify(r) + '</pre>');
        })
        .fail(function (e) {
            console.log(e);
            res.status(400).send('An error occured while posting the message');
        });
});

app.listen(context.getPort(), context.getLstn());
console.log('Running on ' + context.getLstnEndpoint());

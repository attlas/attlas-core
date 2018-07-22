
module.exports = function(express, app, jsv, reply, helpers) {

  this.routerPath = '/api/v1';
  this.router = express.Router();
  //----------------------------------------------------------------------------
  // projects specific declarations
  this.cache = require('memory-cache');

  this.oauth = require('oauthio');
  // Initialize OAuth SDK
  this.oauth.initialize(app.params.get('publicKey'), app.params.get('secretKey'));
  //
  this.providers = {
    facebook: { connected:false },
    linkedin: { connected:false },
    github: { connected:false },
    stackexchange: { connected:false },
    google: { connected:false },
    paypal: { connected:false },
    twitter: { connected:false }
  };

  //----------------------------------------------------------------------------
  // api enpoint info
  this.router.route('/')
    // version info
    .get(function (req, res) {
      return res.json(reply.success({id:'v1'}));
    })
    // projects specific routers
  ;
  // contacts
  this.router.route('/contacts')
    // get list of available providers
    .get(function (req, res) {
      console.log(req);
      let r = {};
      Object.keys(this.providers).forEach(function (key) {
        r[key] = this.providers[key];
        r[key].connected = (req.session.credentials) ? (key in req.session.credentials) : false;
      });
      return res.json(reply.success(r));
    })
  ;
  // goals
  // authenticate
  this.router.get('/goals/auth/:id', function(req, res, next) {
    if (req.params.id in this.providers && req.query.redirect) {
      const rs = randomstring.generate({length: app.params.get('authKeyLength'),charset: 'alphabetic'});
      cache.put(rs, req.query.redirect, app.params.get('authTimeout'), function(key, value) {
        console.log('[CACHE] ' + key + ' expired');
      });
      this.oauth.auth(req.params.id, context.buildEndpoint('api', 'v1', 'oauth', 'redirect', rs))(req, res, next);
    } else {
      return res.status(400).json(reply.fail(`Invalid provider id: '${req.params.id}' or redirect: '${req.query.redirect}'`));
    }
  });
//
// authentication callback
apiV1Router.get('/oauth/redirect/:id', oauth.redirect(function(result, req, res) {
  // error from oauth.io
  if (result instanceof Error) {
    res.status(500).send(context.buildResponseCodeMsg(500, result.message));
  } else {
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
  }
}));
  
  
  //----------------------------------------------------------------------------
  // project specific functionality

  //----------------------------------------------------------------------------
  // register router
  app.use(this.routerPath, this.router);
  return this;
}


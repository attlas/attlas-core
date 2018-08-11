
module.exports = function(express, app, jsv, reply, helpers) {

  this.routerPath = '/api/v1';
  this.router = express.Router({mergeParams: true});
  // component specific declarations ===========================================
  this.cache = require('memory-cache');
  this.randomstring = require("randomstring");

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
  // api enpoint info ==========================================================
  this.router.route('/')
    // version info
    .get(function (req, res) {
      return res.json(reply.success({id:'v1'}));
    });
  // component specific routers ================================================
  // CONTACTS
  this.router.route('/contacts')
    // get list of available providers
    .get(function (req, res) {
      console.log(req.session);
      let r = [];
      Object.keys(this.providers).forEach(function (key) {
        r.push( { providerId: key, connected: (req.session.credentials) ? (key in req.session.credentials) : false } );
      });
      return res.json(reply.success(r));
    });
  // GOALS
  // authenticate
  this.router.get('/goals/auth/:id', function(req, res, next) {
    if (req.params.id in this.providers && req.query.redirect) {
      const rs = this.randomstring.generate({length: app.params.get('authKeyLength'),charset: 'alphabetic'});
      this.cache.put(rs, req.query.redirect, parseInt(app.params.get('authTimeout')), function(key, value) {
        console.log('[CACHE] ' + key + ' expired');
      });
      const redirect = app.params.buildEndpoint('host', 'port', ['api', 'v1', 'goals', 'redirect', rs]);
      console.log(redirect);
      console.log(this.oauth);
      this.oauth.auth(req.params.id, redirect)(req, res, next);
    } else {
      return res.status(400).json(reply.fail(`Invalid provider id: '${req.params.id}' or redirect url: '${req.query.redirect}'`));
    }
  });
  //
  // authentication callback
  this.router.get('/goals/redirect/:id', oauth.redirect(function(result, req, res) {
    // error from oauth.io
    if (result instanceof Error) {
      res.status(500).json(reply.fail(result.message));
    } else {
      const providerId = result.provider;
      const cb = this.cache.get(req.params.id);
      if (cb) {
        this.cache.del(req.params.id);
        const credentials = result.getCredentials();
        if (req.session.credentials == undefined){
          req.session.credentials = {}
        }
        req.session.credentials[providerId] = credentials;
        console.log('Received:', credentials);
        //
        /*
        if (res.session.credentials == undefined){
          res.session.credentials = {}
        }
        res.session.credentials[providerId] = credentials;
        */
        res.redirect(cb);
        //*
        result.me().done(function(me) {
          console.log(me);
        });
        //*/
      } else {
        res.status(500).json(reply.fail('Authentication session expired'));
      }
    }
  }));
  // register router ===========================================================
  app.use(this.routerPath, this.router);
  return this;
}


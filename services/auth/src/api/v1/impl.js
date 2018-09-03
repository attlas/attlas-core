module.exports = function(express, app, jsv, reply, helpers) {

  this.routerPath = '/api/v1';
  this.router = express.Router({mergeParams: true});
  // component specific declarations ===========================================
  this.cache = require('memory-cache');
  this.randomstring = require("randomstring");
  app.params.set('authKeyLength', 128);

  this.oauth = require('oauthio');
  // Initialize OAuth SDK
  this.oauth.initialize(app.params.publicKey, app.params.secretKey);
  //
  this.providers = {
    facebook: { },
    linkedin: { },
    github: { },
    stackexchange: { },
    google: { },
    microsoft: { },
    slack: { },
    dropbox: { },
    paypal: { },
    twitter: { }
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
      const id = req.params.id;
      console.log(`[AUTH][INFO] authenticate '${id}'`);
      const rs = this.randomstring.generate({length: app.params.authKeyLength,charset: 'alphabetic'});
      this.cache.put(rs, req.query.redirect, parseInt(app.params.authTimeout), function(key, value) {
        console.log(`[AUTH][INFO] ${key} expired`);
      });
      const redirect = app.params.buildEndpoint(app.params.host, app.params.port, ['api', 'v1', 'goals', 'redirect', rs]);
      console.log(`[AUTH][INFO] '${id}' redirects to '${redirect}'`);
      this.oauth.auth(id, redirect)(req, res, next);
    } else {
      const msg = `Invalid provider id: '${id}' or redirect url: '${req.query.redirect}'`;
      console.log(`[AUTH][ERROR] ${msg}`);
      return res.status(400).json(reply.fail(msg));
    }
  });
  /*/ logout
  this.router.delete('/goals/auth/:id', function(req, res, next) {
    if ((req.params.id in this.providers) && (req.session.credentials != undefined) && (req.params.id in req.session.credentials)) {
      delete req.session.credentials[req.params.id];
    } else {
      return res.status(400).json(reply.fail(`Invalid provider id: '${req.params.id}'`));
    }
  });
  /*/
  // authentication callback
  this.router.get('/goals/redirect/:id', oauth.redirect(function(result, req, res) {
    // error from oauth.io
    if (result instanceof Error) {
      console.log(`[AUTH][ERROR]  ${result.message}`);
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


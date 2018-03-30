(function() {
  const host = (process.env.STATIC_AUTH_HOSTNAME == undefined)?('127.0.0.1'):(process.env.STATIC_AUTH_HOSTNAME);
  const port = (process.env.STATIC_AUTH_PORT == undefined)?(80):(process.env.STATIC_AUTH_PORT);
  const ports = (process.env.STATIC_AUTH_PORTS == undefined)?(443):(process.env.STATIC_AUTH_PORTS);
  const version = (process.env.PROJECT_VERSION == undefined)?('0.1.0'):(process.env.PROJECT_VERSION);

  const authSecret = process.env.STATIC_AUTH_SECRET;
  const authPublicKey = process.env.STATIC_AUTH_PUBLIC_KEY;
  const authSecretKey = process.env.STATIC_AUTH_SECRET_KEY;


  //
  module.exports.getHost = function() { return host; }
  module.exports.getPort = function() { return port; }
  module.exports.getVersion = function() { return version; }
  module.exports.getHTTPEndpoint = function() { return `http://${host}:${port}`; }
  module.exports.getAuthSecret = function() { return authSecret; }
  module.exports.getAuthPublicKey = function() { return authPublicKey; }
  module.exports.getAuthSecretKey = function() { return authSecretKey; }
  //
  module.exports.getAuthTimeout = function() { return 60 * 1000; }
  
  //
  module.exports.buildEndpoint = function() {
    var args = Array.from(arguments);
    args.unshift(this.getHTTPEndpoint());
    return args.join('/');
  }
  //
  module.exports.buildEndpointUsingBase = function(base, ...args) {
    var a = Array.from(args);
    a.unshift(base);
    return this.getHTTPEndpoint() + a.join('/');
  }
  //
  module.exports.buildResponse = function(code, message, data) { return {code:code, message:message, data:data}; }
  module.exports.buildResponseData = function(data) { return this.buildResponse(0, '', data); }
  module.exports.buildResponseCodeMessage = function(code, message) { return this.buildResponse(code, message, null); }

}());
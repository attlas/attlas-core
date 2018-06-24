(function() {
  const host = (process.env.COMPONENT_PARAM_HOST == undefined)?('127.0.0.1'):(process.env.COMPONENT_PARAM_HOST);
  const lstn = (process.env.COMPONENT_PARAM_LSTN == undefined)?('0.0.0.0'):(process.env.COMPONENT_PARAM_LSTN);
  const port = (process.env.COMPONENT_PARAM_PORT == undefined)?(80):(process.env.COMPONENT_PARAM_PORT);
  const ports = (process.env.COMPONENT_PARAM_PORTS == undefined)?(443):(process.env.COMPONENT_PARAM_PORTS);
  const version = (process.env.PROJECT_VERSION == undefined)?('0.1.0'):(process.env.COMPONENT_VERSION);

  const authSecret = process.env.COMPONENT_PARAM_SECRET;
  const authPublicKey = process.env.COMPONENT_PARAM_PUBLIC_KEY;
  const authSecretKey = process.env.COMPONENT_PARAM_SECRET_KEY;


  //
  module.exports.getHost = function() { return host; }
  module.exports.getLstn = function() { return lstn; }
  module.exports.getPort = function() { return port; }
  module.exports.getVersion = function() { return version; }
  module.exports.getHTTPEndpoint = function() { return `http://${host}:${port}`; }
  module.exports.getLstnEndpoint = function() { return `http://${lstn}:${port}`; }
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
  module.exports.buildResponseCodeMsg = function(code, message) { return this.buildResponse(code, message, null); }
  //
  module.exports.printServerInfo = function() {
    console.log('@tlas auth service');
    console.log('Host   ' + this.getHTTPEndpoint());
    console.log('Listen ' + this.getLstnEndpoint());
  }

}());
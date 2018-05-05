module.exports = function(name) {
  //
  this.name = name;
  this.host = (process.env.SERVICES_COMPARATOR_HOST == undefined)?('localhost'):(process.env.SERVICES_COMPARATOR_HOST);
  this.lstn = (process.env.SERVICES_COMPARATOR_LSTN == undefined)?('0.0.0.0'):(process.env.SERVICES_COMPARATOR_LSTN);
  this.port = (process.env.SERVICES_COMPARATOR_PORT == undefined)?(80):(process.env.SERVICES_COMPARATOR_PORT);
  this.ports = (process.env.SERVICES_COMPARATOR_PORTS == undefined)?(443):(process.env.SERVICES_COMPARATOR_PORTS);
  this.version = (process.env.PROJECT_VERSION == undefined)?('0.1.0'):(process.env.PROJECT_VERSION);
  //
  this.getHost = function() { return host; }
  this.getLstn = function() { return lstn; }
  this.getPort = function() { return port; }
  this.getVersion = function() { return version; }
  this.getHTTPEndpoint = function() { return `http://${host}:${port}`; }
  this.getLstnEndpoint = function() { return `http://${lstn}:${port}`; }
  //
  this.buildEndpoint = function() {
    var args = Array.from(arguments);
    args.unshift(this.getHTTPEndpoint());
    return args.join('/');
  }
  //
  this.buildEndpointUsingBase = function(base, ...args) {
    var a = Array.from(args);
    a.unshift(base);
    return this.getHTTPEndpoint() + a.join('/');
  }
  //
  this.printServerInfo = function() {
    console.log(`@tlas ${name} service`);
    console.log('Host   ' + this.getHTTPEndpoint());
    console.log('Listen ' + this.getLstnEndpoint());
  }
  //
  return this;
};

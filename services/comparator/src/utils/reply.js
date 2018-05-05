module.exports = function() {
  //
  this.build = function(code, message, data) {
    return {code:code, message:message, data:data};
  }
  this.buildData = function(data) {
    return this.build(0, '', data);
  }
  this.buildCodeMsg = function(code, message) {
    return this.build(code, message, null);
  }
  //
  return this;
};
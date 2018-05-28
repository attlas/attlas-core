const path = require('path');
const fs = require('fs');

class Flow {
  constructor(entry) {
    this.entry = entry;
  }
}

module.exports.Flows = class Flows {
  //
  constructor() {
  }
  //
  getFlowById(home, flowId) {
    const file = path.join(home, 'flows', flowId, 'main.js');
    try {
      fs.accessSync(file);
      console.log(file);
      const script = require(file);
      return new Flow(script);
    } catch (e) {
      return null;
    }
    return null;
  }
}
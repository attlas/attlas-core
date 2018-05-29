'use strict';

const path = require('path');
const fs = require('fs');
const BaseCtrl = require('./base_ctrl.js');

class Flow {
  constructor(entry) {
    this.entry = entry;
  }
  //
  fork(context, params) {
    return this.entry(context, params);
  }
}

module.exports.Flows = class Flows extends BaseCtrl{
  //
  constructor(home) {
    super(home);
  }
  //
  createFlowById(flowId) {
    return new Promise( (resolve, reject) => {
      const id = flowId.replace(/\./g, '-');
      const file = path.join(this.getHome(), 'data', 'flows', id, 'impl.js');
      try {
        fs.accessSync(file);
        resolve(new Flow(require(file)));
      } catch (e) {
        console.log(`script '${file}' not found`);
        reject([`flow id: '${flowId}' is unknown`]);
      }
    });
  }
}
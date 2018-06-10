'use strict';

const path = require('path');
const fs = require('fs');
const BaseCtrl = require('./base_ctrl.js');

class Flow {
  constructor(details) {
    this.details = details;
  }
  //
  fork(context, params) {
    // compile schema if needed
    if (context.jsv.compile(this.details.schema.id, this.details.schema.config)) {
      // validate input parameters
      if (!context.jsv.validate(this.details.schema.id, params)) {
        // invalid input parameters
        return new Promise((resolve, reject) => { reject(context.jsv.errors(this.details.schema.id)) });
      }
    } else {
      // schema compilation error
      return new Promise((resolve, reject) => { reject(`Schema description error: ${this.details.schema.id}`) });
    }
    // execute flow
    return this.details.entry(context, params);
  }
}

module.exports.Flows = class Flows extends BaseCtrl{
  //
  constructor(home) {
    super(home);
  }
  //
  createFlowById(flowId) {
    return new Promise((resolve, reject) => {
      const id = flowId.replace(/\./g, '-');
      const file = path.join(this.getHome(), 'data', 'flows', id, 'impl.js');
      try {
        fs.accessSync(file);
        resolve(new Flow(require(file)));
      } catch (e) {
        console.log(`script '${file}' not found`);
        console.log(e);
        reject([`flow id: '${flowId}' is unknown`]);
      }
    });
  }
}
'use strict';

const path = require('path');
const fs = require('fs');
const BaseCtrl = require('./base_ctrl.js');

class Doc {
  constructor(location) {
    this.location = location;
  }
  //
  contents() {
    return fs.readFileSync(this.location, 'utf8');
  }
  //
  json() {
    return JSON.parse(this.contents());
  }
}

module.exports.Docs = class Docs extends BaseCtrl {
  //
  constructor(home) {
    super(home);
  }
  //
  getDocById(docId) {
    return new Promise( (resolve, reject) => {
      const id = docId.replace(/\.\./g, '-');
      const file = path.join(this.getHome(), 'data', 'docs', id);
      try {
        fs.accessSync(file);
        resolve(new Doc(file));
      } catch (e) {
        console.log(`file '${file}' not found`);
        reject([`doc id: '${flowId}' is unknown`]);
      }
    });
  }
}
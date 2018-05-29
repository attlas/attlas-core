'use strict';
const BaseCtrl = require('./base_ctrl.js');

class Goal {
  //
  constructor(data) {
    this.data = data;
  }
  //
  execute(flow, context) {
    return new Promise((resolve, reject) => {
      flow.fork(context, this.data.params)
        .then(r => resolve(r))
        .catch(e => reject(e));
    });
  }
}

module.exports.Goals = class Goals extends BaseCtrl{
  //
  constructor(home) {
    super(home);
  }
  //
  createGoal(goalParams) {
    return new Goal(goalParams);
  }
}

class Goal {
  //
  constructor(params) {
    this.params = params;
    this.result = {};
    this.errors = [];
  }
  //
  execute(flow) {
    return new Promise((resolve, reject) => {
      let result = {data:[1,2,3]};
      let errors = ['error'];
      if (true){
        resolve(result);
      }else{
        reject(errors);
      }
    });
  }
  //
  getResult() {
    return this.result;
  }
  //
  getErrors() {
    return this.errors;
  }
}

module.exports.Goals = class Goals {
  //
  constructor() {
  }
  //
  createGoal(goalParams) {
    return new Goal(goalParams);
  }
}
"use strict";

module.exports = class TagsCloud {
  //
  constructor() {
    this.tags = [];
  }
  //
  load(context, id) {
    return new Promise( (resolve, reject) => {
      context.docs.getDocById(id)
        .then( (doc) => {
          this.tags = doc.json();
          resolve();
        })
        .catch(e => reject(e));
    });
  }
  //
  parse(test) {
  
  }
}

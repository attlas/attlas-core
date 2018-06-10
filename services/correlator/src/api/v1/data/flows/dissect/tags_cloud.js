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
  parse(text) {
    const delims = [' ', ',', '.', ';', ':', '|', '\'', '\\', '/', '"'];
    let r = {};
    const lt = text.toLowerCase();
    const ltLen = lt.length;
    this.tags.forEach((elem) => {
      try {
        const le = elem.toLowerCase();
        const leLen = le.length;
        let occ = 0;
        let pos = 0;
        while( (pos = lt.indexOf(le, pos)) >= 0 ){
          // check word borders
          if (
              ((pos == 0) || ((pos > 0) && (delims.indexOf(lt[pos-1]) > -1)))
                &&
              ((pos == (ltLen - leLen)) || ((pos < (ltLen - leLen)) && (delims.indexOf(lt[pos+leLen]) > -1)))
             ) {
            occ++;
          }
          pos = pos + leLen;
        }
        //
        if (occ > 0){
          r[le] = {occurrences:occ};
        }
      } catch(e) {
        console.log(elem, e);
      }
    });
    return r;
  }
}

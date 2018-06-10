"use strict";

module.exports.schema = {
  "id" : 'matchTagsSchema',
  "config": {
    "title": "Match streams of tags",
    "description": "",
    "type": "object",
    "properties": {
      "streams": {
        "type": "array",
        "description": "Text to parse",
        "minItems": 2,
        "maxItems": 2,
        "items": {
          "type": "object",
          "properties": {
            "id": {
              "type": "string"
            },
            "tags": {
              "type": "object"
            }
          },
          "required": ["id", "tags"]
        }
      }
    },
    "required": ["streams"]
  }
};

module.exports.entry = function(context, params) {
  return new Promise( (resolve, reject) => {
    const streams = params.streams;
    const streamsLen = streams.length;
    //
    let r = [];
    for(let i = 0; i < streamsLen; i++){
      const lKeys = Object.keys(streams[i].tags);
      for(let j = i+1; j < streamsLen; j++){
        let v = 0;
        let dominator = 0;
        const rKeys = Object.keys(streams[j].tags);
        //
        const lV = lKeys.filter(value => -1 !== rKeys.indexOf(value));
        const rV = rKeys.filter(value => -1 !== lKeys.indexOf(value));
        //
        if (lKeys.length) {
          v += lV.length / lKeys.length;
          dominator++;
        }
        if (rKeys.length) {
          v += rV.length / rKeys.length;
          dominator++;
        }
        if (dominator) {
          v /= dominator;
        }
        //
        r.push({
          left:streams[i].id,
          right: streams[j].id,
          leftTags: lV,
          rightTags: rV,
          value: v
        });
      }
    }
    resolve(r);
  });
}
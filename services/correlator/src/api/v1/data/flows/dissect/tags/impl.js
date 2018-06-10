"use strict";

const TagsCloud = require('./../tags_cloud.js');
let tagsCloud;

module.exports.schema = {
  "id" : 'dissectTagsSchema',
  "config": {
    "title": "Dissect text into tags options schema",
    "description": "",
    "type": "object",
    "properties": {
      "text": {
        "type": "string",
        "description": "Text to parse"
      }
    },
    "required": ["text"]
  }
};

module.exports.entry = function(context, params) {
  return new Promise( (resolve, reject) => {
    // load tags if needed and parse
    if (tagsCloud == undefined){
      tagsCloud = new TagsCloud();
      tagsCloud.load(context, 'tags/skills.hard.json')
        .then(function(){
          resolve(tagsCloud.parse(params.text));
        })
        .catch((e) => {
          reject(e);
        });
    } else {
      resolve(tagsCloud.parse(params.text));
    }
  });
}
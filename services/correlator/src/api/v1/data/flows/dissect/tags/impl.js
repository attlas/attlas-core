"use strict";

const TagsCloud = require('./../tags_cloud.js');
let tagsCloud;

const dissectTagsSchema = {
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
};

module.exports = function(context, params) {
  return new Promise( (resolve, reject) => {
    // validate input parameters
    context.jsv.compile('dissectTagsSchema', dissectTagsSchema);
    if (!context.jsv.validate('dissectTagsSchema', params)){
      reject(context.jsv.errors('dissectTagsSchema'));
    } else {
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
    }
  });
}
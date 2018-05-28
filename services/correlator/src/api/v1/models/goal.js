'use strict';

module.exports.GoalParamSchemaId = 'GoalParamSchemaId';
module.exports.GoalParamSchema = {
  "title": "GoalParam schema",
  "description": "",
  "type": "object",
  "properties": {
    "flowId": {
      "type": "string",
      "description": "Flow identifier which will be used as entry point"
    },
    "async": {
      "type": "boolean",
      "description": "Goal should be executed asynchronous"
    },
    "params": {
      "type": "object",
      "description": "Flow input parameters"
    }
  },
  "required": ["flowId", "async", "params"]
};

module.exports.Goal = class Goal {
   constructor(params) {
       this.params = params;
   }
}
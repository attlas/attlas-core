'use strict';

// global consts
const prjName = 'correlator';
const prjNameCap = prjName.toUpperCase();
const prjEnvPrefix = `SERVICES_${prjNameCap}`;

// common modules
const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');


// appl
// global application middleware
const appl = express();
appl.use(bodyParser.json());

// utilities
// json validator
const healthCheckSchema = {
  "title": "Healthcheck options schema",
  "description": "",
  "type": "object",
  "properties": {
    "timeout": {
      "type": "number",
      "description": "Status update timeout"
    }
  },
  "required": ["timeout"]
};
const jsv = require('./utils/jsv')({ allErrors:true, removeAdditional:'all' });
jsv.compile('healthCheckSchema', healthCheckSchema);

// API response composer
const reply = require('./utils/reply')();
// helpers
const helpers = require('./utils/reply')(jsv, reply);

// service parameters
appl.params = require('./utils/params')(prjName, { 
  host:   { env:`${prjEnvPrefix}_HOST`, def:'localhost' },
  lstn:   { env:`${prjEnvPrefix}_LSTN`, def:'0.0.0.0' },
  port:   { env:`${prjEnvPrefix}_PORT`, def:80 },
  ports:  { env:`${prjEnvPrefix}_PORTS`, def: 443 },
  version:{ env:`PROJECT_VERSION`, def:'0.1.0' }
});

//
const v1 = require('./api/v1/impl')(express, jsv, reply, helpers);
// heakthcheck endpoint
appl.route('/healthcheck')
  .get( (req, res) => {
    return res.json(reply.success(appl.params.getAllVariables()));
  })
  .post( 
    (req, res, next) => {
      if (!jsv.validate('healthCheckSchema', req.body)){
        return res.json(reply.fail(jsv.errors('healthCheckSchema')));
      }
      next();
    },
    (req, res) => {
      return res.json(reply.success({key:"value"}));
    }
  );
appl.use('/api/v1', v1.getRouter());
//
var server = appl.listen(appl.params.get('port'), appl.params.get('lstn'), () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log(`Server is listening http://${host}:${port}`);
});
module.exports = { server:server, params:appl.params };
//

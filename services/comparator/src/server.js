'use strict';

const express = require('express');

// apps modules
const context = require('./utils/context')('comparator');
const reply = require('./utils/reply')();

// App
const app = express();
app.get('/', (req, res) => {
  res.json(reply.buildData([]));
});

module.exports = app.listen(context.getPort(), context.getLstn());
context.printServerInfo();

'use strict';
const express = require('express');
const chalk = require('chalk');
const browserify = require('browserify-middleware')
const Path = require('path');
const config = require('../config/config');
const Log = require('log');
const log = new Log(config.LOG_LEVEL);
const port = config.SERVER_PORT;

const serverOptions = {
  name: 'Blog:GrantRedfearn',
  version: '1.0.0'
};

/*********************\
* CLIENT SIDE ROUTING *
**********************/
const routes = express.Router();

var bundle = Path.resolve(__dirname, '../dist');
routes.get('/', function (req, res) {
  res.sendFile(bundle + '/index.html');
});

// Static assets (html, etc.)
const assetFolder = Path.resolve(__dirname, '../client/assets')
routes.use(express.static(assetFolder))




/*********************\
* SERVER SIDE ROUTING *
**********************/
const app = express(serverOptions);

const generateBlogRoutes = require('./routes/blog.routes');
generateBlogRoutes(app);

//todo: not sure
// app.use('/', routes)

app.use(function(req, res, next) {
  log(req.method + '' + req.url)
});


app.listen(port, function () {
  log(chalk.green('Blogtown listening at '+${port}));
});


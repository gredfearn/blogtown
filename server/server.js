'use strict';
const express = require('express');
const chalk = require('chalk');
const browserify = require('browserify-middleware')
const path = require('path');
const config = require('../config/config');
const Log = require('log');
const log = new Log(config.LOG_LEVEL);
const port = config.SERVER_PORT;
const db = require('../lib/db');

const serverOptions = {
  name: 'Blog:GrantRedfearn',
  version: '1.0.0'
};

/*********************\
* CLIENT SIDE ROUTING *
**********************/
const routes = express.Router();

var bundle = path.resolve(__dirname, '../dist');
routes.use(express.static(bundle));

routes.get('/', function (req, res) {
  res.sendFile(bundle + '/index.html');
});

routes.get('/bundle.js', function (req, res) {
  res.sendFile(bundle + '/bundle.js');
});

/********************\
*  DATABASE CONFIG   *
*********************/


/*********************\
* SERVER SIDE ROUTING *
**********************/
const app = express(serverOptions);
app.use('/', routes)

const generateBlogRoutes = require('./routes/blog.route');
generateBlogRoutes(app);

app.use(function(req, res, next) {
  log.alert(req.method + ' ' + req.url)
});

app.listen(port, function () {
  log.alert(chalk.green('Blogtown listening at '+port));
});


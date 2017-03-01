const Log = require('log');
const config = require('../../config/config');
const log = new Log(config.LOG_LEVEL);
const Promise = require('bluebird');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const _ = require('lodash');
mongoose.Promise = Promise;

exports.schemas = {};
const blogSchema = exports.schemas.blogSchema = require('./schema/blog.schema.js');

const dbOptions = {
  auto_reconnect: true,
  server: {
    socketOptions: {
      connectTimeoutMS: 30000
    }
  }
};

const dbConfig = {
  test: {
    uri: config.DB_CONNECT + config.DB_NAME,
    options: dbOptions
  }
};

let connections = {};
_.forEach(dbConfig, function(db, name){

  let conn = mongoose.createConnection(db.uri, db.options);
  connections[name] = {
    Blog: conn.model('blogs', new Schema(blogSchema))
  };

  conn.on('error', function(err){
    log.alert(err);
  });

  conn.once('open', function() {
    log.info('connected to '+config.DB_CONNECT+' database');
  });
});

exports.connections = connections;

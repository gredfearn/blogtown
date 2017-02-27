const mongoose = require('mongoose');
const config = require('../config/config');
const Log = require('log');
const log = new Log(config.LOG_LEVEL);
const db = mongoose.connection;

mongoose.connect(config.DB_CONNECT);
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  log.alert('Connected to '+config.DB_CONNECT+' database');
});

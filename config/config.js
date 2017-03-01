'use strict'

module.exports = {
  DB_CONNECT      : process.env.DB_CONNECT     || "mongodb://localhost/",
  DB_NAME         : process.env.DB_NAME        || "test",
  LOG_LEVEL       : process.env.LOG_LEVEL      || "debug",
  SERVER_PORT     : process.env.SERVER_PORT    || "8000",
  SERVER_ADDRESS  : process.env.SERVER_ADDRESS || 'http://localhost'
}

'use strict'

module.exports = {
  DB_CONNECT      : process.env.DB_CONNECT  || "mongodb://localhost/test",
  LOG_LEVEL       : process.env.LOG_LEVEL   || "debug",
  SERVER_PORT     : process.env.SERVER_PORT || "8000"
}

const models = require('../../lib/models/blog.model');
const config = require('../../config/config')
const Log = require('log');
const log = new Log(config.LOG_LEVEL);

module.exports = function(app) {
  app.get('/blogs', (req, res) => {
    log.info('Getting Blog Posts...')
  })
}

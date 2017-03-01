const Blog = require('../controllers/blog.controller');
const Log = require('log');
const config = require('../../../config/config');
const log = new Log(config.LOG_LEVEL);
function generateBlogRoutes(app) {

  const getBlogReqRes = (req, res, next) => {
    var db = req.query.db;

    Blog.getBlogs(db)
      .then((response) => {
        log.debug({response: response})
        res.status(200).send(response)
      })
      .catch(err => {
        log.info({data: req.body, route: "getBlog", message: err.message})
        res.send(400)
      })
  }


  const postBlogReqRes = (req, res, next) => {
    var db = req.body.db
    var blog = req.body.blog;

    Blog.postBlogReqRes(blog, db)
      .then((response) => {
        log.debug({response: response})
        res.send(200, response)
      })
      .catch(err => {
        log.info({data: req.body, route: "postBlog", message: err.message})
        res.send(400)
      })
  }

  app.get('/blog/getBlogs', getBlogReqRes);
  app.post({path: '/blog/postBlog'}, postBlogReqRes);
}

module.exports = generateBlogRoutes;

const Blog = require('../controllers/blog.controller');
const config = require('../../../config/config');
const Log = require('log');
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
        log.debug({data: req.body, route: "getBlog", message: err.message})
        res.send(400)
      })
  }


  const postBlogReqRes = (req, res, next) => {
    var db = req.body.db
    var blog = req.body.blog;

    Blog.postBlog(blog, db)
      .then((response) => {
        log.debug({response: response})
        res.status(200).send(response)
      })
      .catch(err => {
        log.debug({data: req.body, route: "postBlog", message: err.message})
        res.send(400)
      })
  }

  app.get('/blog/getBlogs', getBlogReqRes);
  app.post('/blog/postBlog', postBlogReqRes);
}

module.exports = generateBlogRoutes;

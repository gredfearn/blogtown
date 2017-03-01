const schema = require('../schema/blog.schema');
const mongoose = require('mongoose');
const BlogPost = mongoose.model('blog', schema, 'blogs');
const config = require('../../../config/config');
const db = require('../db');
const Log = require('log');
const log = new Log(config.LOG_LEVEL);

var connections = require('../db').connections;

let Blog = {};

Blog.getBlogs = function(db) {
  let conn = connections[db];

  if (conn === undefined) {
    return Promise.reject(new Error('No database connection for: '+db));
  }

  let Blog = conn.Blog;

  return new Promise((resolve, reject) => {
    Blog.find()
      .then( (blogs) => {

        return resolve({
          response: 200,
          data: blogs
        })
      })
      .catch( err => {
        log.Error(err)
      })
  })
}

Blog.postBlog = function(blog, db) {
  let conn = connections[db];

  if (conn === undefined) {
    return Promise.reject(new Error('No database connection for: '+db))
  }

  let Blog = conn.Blog;

  return (new Blog(blog)).save();
}

module.exports = Blog;

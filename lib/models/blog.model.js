const schema = require('../schema/blog.schema');
const mongoose = require('mongoose');
const BlogPost = mongoose.model('blog', schema, 'blogs');
const config = require('../../config/config');
const Log = require('log');
const log = new Log(config.LOG_LEVEL);

function insertBlog(blog){
  let title = blog.title,
      author  = blog.author,
      post = blog.post;

  return new BlogPost({
    timeStamp: new Date(),
    title: title,
    author: author,
    post: post
  })
  .save((err, result) => {
    if(err) return log.error(err);
    log.debug('RESULT!', result);
  })
}




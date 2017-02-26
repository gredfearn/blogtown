'use strict';
const mongoose = require('mongoose');

module.exports = mongoose.Schema({
  timeStamp: String,
  title: String,
  author: String,
  post: String
})

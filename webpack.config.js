var path = require('path');
var webpack = require('webpack');

module.exports = {
  module: {
    loaders: [
      {
        loader: 'babel-loader',
      //  skip any files outside of projects 'src' directory
        include: [
          path.resolve(__dirname, 'src'),
        ],
      //  Only run '.js' and '.jsx' files through babel
        test: /\.jsx?$/,
      //  options to configure babel with
        query: {
          plugins: ['transform-runtime'],
          presets: ['es2015', 'react'],
        }
      }
    ]
  },
  output: {
    filename: 'bundle.js'
  },
  entry: [
    './src/index.js'
  ],
  watch: true,
  colors: true,
  progress: true
};
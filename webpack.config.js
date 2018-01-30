var webpack = require('webpack');
var path = require('path');

const config = {
  entry: './public/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules:[
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /(node_modules|routes|)/
      },
      {
        use: ['style-loader', 'css-loader', 'less-loader'],
        test: /\.less$/
      }
    ]
  }
};

module.exports = config;
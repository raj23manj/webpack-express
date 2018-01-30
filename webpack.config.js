const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


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
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          use: ["css-loader", "less-loader"]
        }) 
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css")
 ]
};

module.exports = config;
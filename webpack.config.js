const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


const config = {
  entry: './public/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'dist/'
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
        use: ["style-loader" ,"css-loader", "less-loader"]
        // use: ExtractTextPlugin.extract({
        //   use: ["css-loader", "less-loader"]
        // }) 
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
                {
                  loader: 'url-loader',
                  options: { limit: 40000 }
                },
                'image-webpack-loader'
              ]
      }
    ]
   }
 //  ,plugins: [
 //    new ExtractTextPlugin("styles.css")
 // ]
};

module.exports = config;
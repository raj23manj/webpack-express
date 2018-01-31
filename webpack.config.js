const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
//const ExtractTextPlugin = require('extract-text-webpack-plugin');
const VENDOR_LIBS = [
  "jquery", "lodash", "popper.js", "bootstrap"
];

const config = {
  // entry: './public/index.js',
  // vendor specific and client specific
  entry: {
    bundle: './public/index.js',
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
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
        test: /\.css$/,
        use: ["style-loader" ,"css-loader"]
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
  },
  plugins:[
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.optimize.CommonsChunkPlugin({
     names: ['vendor', 'manifest']
    })
    ,
    new HtmlWebpackPlugin({
      filename: 'generate_scripts.html',
      template: 'views/partials/generate_scripts.jade'
    }),
    new UglifyJsPlugin({
      sourceMap: true
    })
  ]
 //  ,plugins: [
 //    new ExtractTextPlugin("styles.css")
 // ]
};

module.exports = config;
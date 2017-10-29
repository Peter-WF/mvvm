/**
 * @authors       Peter 王斐
 * @email         wangfeia@zbj.com
 * @date          2017-10-29 20:32
 * @description
 */

const webpack = require('webpack');
const path = require('path');
const ip = require('ip')

const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

const config = {
  entry: path.resolve(__dirname, '../src'),
  cache: true,
  devtool: 'eval-source-map',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'mvvm.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.resolve('../src')
      },
    ]
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new FriendlyErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html')
    })
  ],
  devServer: {
    host: ip.address(),
    headers: { "Access-Control-Allow-Origin": "*" }
  },
};

module.exports = config;
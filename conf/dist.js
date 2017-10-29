/**
 * @authors       Peter 王斐
 * @email         wangfeia@zbj.com
 * @date          2017-10-29 20:32
 * @description
 */

const webpack = require('webpack')
const path = require('path')

const config = {
  entry: path.resolve(__dirname, '../src'),
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
    new webpack.optimize.UglifyJsPlugin()
  ],
}

module.exports = config
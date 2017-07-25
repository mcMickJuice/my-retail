const webpackBase = require('./webpack.base')
const merge = require('webpack-merge')
const Uglify = require('uglifyjs-webpack-plugin')
const webpack = require('webpack')

const webpackProd = {
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new Uglify()
  ]
}

module.exports = merge(webpackBase, webpackProd)

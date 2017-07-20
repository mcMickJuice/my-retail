const webpackBase = require('./webpack.base')
const merge = require('webpack-merge')

const webpackDev = {
  devtool: 'cheap-module-source-map'
}

module.exports = merge(webpackBase, webpackDev)

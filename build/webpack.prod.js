const webpackBase = require('./webpack.base')
const merge = require('webpack-merge')
const Uglify = require('uglifyjs-webpack-plugin')

const webpackProd = {
  plugins: [new Uglify()]
}

module.exports = merge(webpackBase, webpackProd)

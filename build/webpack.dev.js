const webpackBase = require('./webpack.base')
const merge = require('webpack-merge')
const webpack = require('webpack')

const webpackDev = {
  entry: {
    //setup hot reloading with webpack
    app: ['webpack/hot/dev-server', 'webpack-hot-middleware/client']
  },
  devtool: 'cheap-module-source-map',
  plugins: [new webpack.HotModuleReplacementPlugin()]
}

module.exports = merge(webpackDev, webpackBase)

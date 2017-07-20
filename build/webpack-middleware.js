const config = require('./webpack.dev')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

module.exports = app => {
  const compiler = webpack(config)

  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: config.output.publicPath,
      quiet: true,
      stats: {
        color: true
      }
    })
  )

  app.use(webpackHotMiddleware(compiler))
}

const express = require('express')
const dataService = require('./data-service')

function webRouter(app) {
  app.use('/', express.static('public'))

  app.get('/api/product', (req, res) => {
    dataService().then(data => {
      res.send(data)
    })
  })
}

module.exports = (port, isDev, callback) => {
  const app = express()
  if (isDev) {
    //register route logging
    const webpackMiddleware = require('../build/webpack-middleware')

    app.use((req, res, next) => {
      /* eslint-disable no-console */
      console.log(`Request made to: ${req.path}`)
      /*eslint-enable no-console */

      next()
    })

    webpackMiddleware(app)

    //webpack dev middleware
  }

  webRouter(app)

  app.listen(port, callback)
}

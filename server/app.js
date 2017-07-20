const express = require('express')
const dataService = require('./data-service')

function webRouter(app) {
  app.use('/', express.static('public'))

  app.get('/api', (req, res) => {
    const result = dataService()
    res.send(result)
  })
}

module.exports = (port, isDev, callback) => {
  const app = express()
  if (isDev) {
    //register route logging

    app.use((req, res, next) => {
      /* eslint-disable no-console */
      console.log(__dirname)
      console.log(`Request made to: ${req.path}`)

      /*eslint-enable no-console */

      next()
    })

    //webpack dev middleware
  }

  webRouter(app)

  app.listen(port, callback)
}

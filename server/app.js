const express = require('express')
const path = require('path')
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
      console.log(__dirname)
      console.log(`Request made to: ${req.path}`)
      next()
    })

    //webpack dev middleware
  }

  webRouter(app)

  app.listen(port, callback)
}

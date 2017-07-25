const server = require('./server/app')

const isDev = process.env.NODE_ENV === 'development'
const port = process.env.PORT || 3000
const host = process.env.HOST || 'http://localhost'

server(port, isDev, err => {
  /* eslint-disable no-console*/
  if (err) {
    console.error('there was an error', err)
    return
  }

  console.log(`App started ${host}:${port}`)
  /* eslint-enable no-console */
  if (isDev) {
    //auto open browser at specified port
    require('open')(`${host}:${port}`)
  }
})

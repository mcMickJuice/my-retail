const server = require('./server/app')

const isDev = process.env.NODE_ENV === 'development'
const port = process.env.PORT || 3000

server(port, isDev, err => {
  if (err) {
    console.error('there was an error', err)
    return
  }

  console.log(`App started at port ${port}`)
})

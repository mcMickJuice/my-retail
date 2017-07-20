import React from 'react'
import { render } from 'react-dom'
import App from './App'

const mount = document.getElementById('mount')

render(<App />, mount)

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default
    render(<NextApp />, mount)
  })
}

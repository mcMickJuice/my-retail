import React from 'react'
import { render } from 'react-dom'

const App = () => {
  return <div>im the app!!!</div>
}

const mount = document.getElementById('mount')

render(<App />, mount)

import React from 'react'
import App from './App'
import { shallow } from 'enzyme'

describe('App', () => {
  test('should not crash', () => {
    shallow(<App />)
  })
})

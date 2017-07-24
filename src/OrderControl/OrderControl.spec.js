import React from 'react'
import OrderControl from './OrderControl'
import { shallow } from 'enzyme'

let instance
beforeEach(() => {
  instance = shallow(<OrderControl />).instance()
})

describe('Order Control', () => {
  test('should have initial orderCount of 1', () => {
    expect(instance.state.orderCount).toBe(1)
  })

  test('should increment orderCount by 1', () => {
    instance.state.orderCount = 3

    instance.onCountIncrement()

    expect(instance.state.orderCount).toBe(4)
  })

  test('should decrement orderCount by 1', () => {
    instance.state.orderCount = 3

    instance.onCountDecrement()

    expect(instance.state.orderCount).toBe(2)
  })

  test('should not decrement orderCount below 0', () => {
    instance.state.orderCount = 0

    instance.onCountDecrement()

    expect(instance.state.orderCount).toBe(0)
  })
})

import React from 'react'
import OrderControl, { OrderButton } from './OrderControl'
import { shallow } from 'enzyme'

let instance
beforeEach(() => {
  instance = shallow(<OrderControl purchasingChannelCode={1} />).instance()
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

  test('should show the AddToCart if purchasingChannelCode is 0', () => {
    const element = shallow(<OrderControl purchasingChannelCode={0} />)

    const buttonElements = element.find(OrderButton).nodes

    expect(
      buttonElements.some(button => button.props.children === 'Add To Cart')
    ).toBe(true)
  })
  test('should show the AddToCart if purchasingChannelCode is 1', () => {
    const element = shallow(<OrderControl purchasingChannelCode={1} />)

    const buttonElements = element.find(OrderButton).nodes

    expect(
      buttonElements.some(button => button.props.children === 'Add To Cart')
    ).toBe(true)
  })
  test('should hide the AddToCart if purchasingChannelCode is not 0 or 1', () => {
    const element = shallow(<OrderControl purchasingChannelCode={2} />)

    const buttonElements = element.find(OrderButton).nodes

    expect(
      buttonElements.some(button => button.props.children === 'Add To Cart')
    ).toBe(false)
  })
  test('should show the PickUpInStore button if purchasingChannelCode is 0', () => {
    const element = shallow(<OrderControl purchasingChannelCode={0} />)

    const buttonElements = element.find(OrderButton).nodes

    expect(
      buttonElements.some(
        button => button.props.children === 'Pick up in Store'
      )
    ).toBe(true)
  })
  test('should show the PickUpInStore button if purchasingChannelCode is 2', () => {
    const element = shallow(<OrderControl purchasingChannelCode={2} />)

    const buttonElements = element.find(OrderButton).nodes

    expect(
      buttonElements.some(
        button => button.props.children === 'Pick up in Store'
      )
    ).toBe(true)
  })
  test('should hide the PickUpInStore button if purchasingChannelCode is not 0 or 2', () => {
    const element = shallow(<OrderControl purchasingChannelCode={1} />)

    const buttonElements = element.find(OrderButton).nodes

    expect(
      buttonElements.some(
        button => button.props.children === 'Pick up in Store'
      )
    ).toBe(false)
  })
})

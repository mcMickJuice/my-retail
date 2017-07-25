import React from 'react'
import App from './App'
import ProductScreen from '../ProductScreen'
import { shallow, mount } from 'enzyme'

const mockProductData = {
  priceInfo: {
    formattedPriceValue: '$140.00',
    priceQualifier: 'Online only!'
  },
  purchasingChannelCode: 2,
  images: ['image/1', 'image/2', 'image/3'],
  title: 'fakeData!'
}

jest.mock('../data-service', () => {
  return {
    getProductData: jest.fn(
      () =>
        new Promise(resolve => {
          resolve(mockProductData)
        })
    )
  }
})

describe('App', () => {
  test('should have default state of isLoading true', () => {
    const instance = shallow(<App />).instance()

    expect(instance.state.isLoading).toBe(true)
  })

  test('should call getProductData on mount and set loading to false', async () => {
    expect.assertions(2)
    const instance = mount(<App />).instance()

    expect(instance.state.isLoading).toBe(true)

    await Promise.resolve()

    expect(instance.state.isLoading).toBe(false)
  })

  test('should call getProductData on mount and set productData to mockProductData', async () => {
    expect.assertions(2)
    const instance = mount(<App />).instance()

    expect(instance.state.productData).toBe(undefined)

    await Promise.resolve()

    expect(instance.state.productData).toBe(mockProductData)
  })

  test('should not render ProductScreen before getProductData resolves', () => {
    const element = mount(<App />)

    //this check is performed before nextTick so before getProductData has resolved
    expect(
      element.containsMatchingElement(<ProductScreen {...mockProductData} />)
    ).toBe(false)
  })

  test('should render ProductScreen after getProductData resolves', async () => {
    expect.assertions(1)
    const element = mount(<App />)

    await Promise.resolve()

    expect(
      element.containsMatchingElement(<ProductScreen {...mockProductData} />)
    ).toBe(true)
  })
})

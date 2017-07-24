import React, { Component } from 'react'
import styled from 'styled-components'
import { getProductData } from './data-service'
import ProductScreen from './ProductScreen'
import injectGlobalStyles from './globalStyles'

injectGlobalStyles()

const Loading = styled.div`
  text-align: center;
  font-size: 24px;
`

class App extends Component {
  constructor() {
    super()

    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    this.setState(() => ({
      isLoading: true
    }))
    getProductData().then(productData => {
      this.setState(() => ({
        isLoading: false,
        productData
      }))
    })
  }

  render() {
    const { isLoading, productData } = this.state

    const toRender = isLoading
      ? <Loading>Product Info Is Loading</Loading>
      : <ProductScreen {...productData} />

    return toRender
  }
}

export default App

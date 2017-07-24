import React, { Component } from 'react'
import styled from 'styled-components'
import { lightgray, red } from './colors'

const OrderControlContainer = styled.div`
  & > * {
    margin: 25px 0;
  }
`

const QuantityControl = styled.div`
  width: 48%;
  border: 1px solid ${lightgray};
  padding: 5px;
`
const OrderButton = styled.button`
  cursor: pointer;
  border: 1px solid ${props => props.color || 'black'};
  background-color: ${props => props.color || 'black'};
  text-transform: uppercase;
  color: white;
  font-size: 16px;
  padding: 8px 0;
  border-radius: 3px;
`

const OrderButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  & > ${OrderButton} {
    width: 48%;
  }
`

const ReturnInfo = styled.div`
  color: ${lightgray};
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > div:first-child {
    font-size: 20px;
    padding: 5px 10px 5px 0;
    border-right: 1px solid ${lightgray};
  }
  & > div:last-child {
    font-size: 12px;
  }
`

const SecondaryButton = styled.button`
  cursor: pointer;
  border: none;
  background-color: ${lightgray};
  text-transform: uppercase;
  padding: 5px 0;
`

const SecondaryButtons = styled.div`
  display: flex;
  justify-content: space-between;
  & > ${SecondaryButton} {
    width: 32%;
  }
`

//Pick up in store
//add to cart
class OrderControl extends Component {
  constructor() {
    super()

    this.onCountDecrement = this.onCountDecrement.bind(this)
    this.onCountIncrement = this.onCountIncrement.bind(this)

    this.state = {
      orderCount: 1
    }
  }

  onCountIncrement() {
    this.setState(prevState => ({
      orderCount: prevState.orderCount + 1
    }))
  }

  onCountDecrement() {
    const { orderCount } = this.state

    if (orderCount === 0) return
    this.setState(prevState => ({
      orderCount: prevState.orderCount - 1
    }))
  }

  render() {
    return (
      <OrderControlContainer>
        <QuantityControl />
        <OrderButtonContainer>
          <OrderButton>Pick up in Store</OrderButton>
          <OrderButton color={red}>Add To Cart</OrderButton>
        </OrderButtonContainer>
        <ReturnInfo>
          <div>returns</div>
          <div>
            This item must be returned within 30 days of the ship date. See
            <strong>return policy</strong> for details.<br /> Prices,
            promotions, styles and availability may vary by store and online.
          </div>
        </ReturnInfo>
        <SecondaryButtons>
          <SecondaryButton>Add To Registry</SecondaryButton>
          <SecondaryButton>Add to List</SecondaryButton>
          <SecondaryButton>Share</SecondaryButton>
        </SecondaryButtons>
      </OrderControlContainer>
    )
  }
}

export default OrderControl

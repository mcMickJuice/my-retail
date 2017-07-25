import React, { Component } from 'react'
import * as T from 'prop-types'
import styled from 'styled-components'
import { lightgray, mediumgray, darkgray, red } from '../colors'
import { tablet } from '../screenSizes'
import QuantityControl from './QuantityControl'

const Container = styled.div`
  & > * {
    margin: 30px 0;
  }
`

const gradients = {
  red: `linear-gradient(to top, ${red}, #ce1a21 70%, #de6365)`,
  black: 'linear-gradient(to top, black, #191616 70%, #585858)'
}

export const OrderButton = styled.button`
  cursor: pointer;
  border: 1px solid ${props => props.color || 'black'};
  background: ${props => gradients[props.color || 'black']};
  text-transform: uppercase;
  color: white;
  font-size: 16px;
  padding: 8px 0;
  border-radius: 4px;
  position: relative;
   

  &::after {
    content: '${props => props.after || ''}';
    position: absolute;
    color: black;
    bottom: -18px;
    font-weight: 700;
    text-transform: lowercase;
    left: 0;
    font-size: 12px;
    width: 100%;
    display: none;
    @media screen and (min-width: ${tablet}px) {
      display: block;
    }
  }
  
`

const OrderButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  & > ${OrderButton} {
    width: 48%;
  }
`

const ReturnInfo = styled.div`
  color: ${darkgray};
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > div:first-child {
    font-size: 16px;
    padding: 5px 10px 5px 0;
    border-right: 1px solid ${mediumgray};
  }
  & > div:last-child {
    padding-left: 10px;
    font-size: 10px;
  }
`

const SecondaryButton = styled.button`
  cursor: pointer;
  font-size: 12px;
  color: ${darkgray};
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
    const { orderCount } = this.state
    const { purchasingChannelCode } = this.props

    const showAddToCart =
      purchasingChannelCode == 0 || purchasingChannelCode == 1
    const showPickUpInStore =
      purchasingChannelCode == 0 || purchasingChannelCode == 2
    return (
      <Container>
        <QuantityControl
          quantity={orderCount}
          increment={this.onCountIncrement}
          decrement={this.onCountDecrement}
        />
        {(showAddToCart || showPickUpInStore) &&
          <OrderButtonContainer>
            {showPickUpInStore &&
              <OrderButton after={'find in a store'}>
                Pick up in Store
              </OrderButton>}
            {showAddToCart &&
              <OrderButton color="red">Add To Cart</OrderButton>}
          </OrderButtonContainer>}
        <ReturnInfo>
          <div>returns</div>
          <div>
            This item must be returned within 30 days of the ship date. See
            <strong> return policy</strong> for details.
            <br />
            Prices, promotions, styles and availability may vary by store and
            online.
          </div>
        </ReturnInfo>
        <SecondaryButtons>
          <SecondaryButton>Add To Registry</SecondaryButton>
          <SecondaryButton>Add to List</SecondaryButton>
          <SecondaryButton>Share</SecondaryButton>
        </SecondaryButtons>
      </Container>
    )
  }
}

OrderControl.propTypes = {
  purchasingChannelCode: T.number.isRequired
}

export default OrderControl

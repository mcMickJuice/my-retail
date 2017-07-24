import React from 'react'
import * as T from 'prop-types'
import styled from 'styled-components'
import { lightgray } from '../../colors'

const Container = styled.div`
  width: 48%;
  border: 1px solid ${lightgray};
  border-radius: 4px;
  padding: 3px 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const QuantityButton = styled.button.attrs({
  className: props => (props.isPlus ? 'icon-plus' : 'icon-minus')
})`
  border: none;
  cursor: pointer;
  color: white;
  border-radius: 50%;
  padding: 10px;
  background-color: ${lightgray};
`

const QuantityCount = styled.span`
  margin: 0 10px;
  user-select: none;
`

const QuantityControl = ({ quantity, decrement, increment }) => {
  return (
    <Container>
      <div>quantity:</div>
      <div>
        <QuantityButton onClick={decrement} />
        <QuantityCount>
          {quantity}
        </QuantityCount>
        <QuantityButton isPlus onClick={increment} />
      </div>
    </Container>
  )
}

QuantityControl.propTypes = {
  quantity: T.number.isRequired,
  increment: T.func.isRequired,
  decrement: T.func.isRequired
}

export default QuantityControl

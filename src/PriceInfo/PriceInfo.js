import React from 'react'
import * as T from 'prop-types'
import styled from 'styled-components'
import { darkgray } from '../colors'

const Price = styled.span`
  font-weight: 600;
  font-size: 24px;
  margin-right: 8px;
`

const PriceQualifier = styled.span`
  color: ${darkgray};
  font-size: 10px;
`

const PriceInfo = ({ price, priceQualifier }) => {
  return (
    <div>
      <Price>
        {price}
      </Price>
      <PriceQualifier>
        {priceQualifier}
      </PriceQualifier>
    </div>
  )
}

PriceInfo.propTypes = {
  price: T.string.isRequired,
  priceQualifier: T.string.isRequired
}

export default PriceInfo

import React from 'react'
import styled from 'styled-components'
import { red, darkgray } from '../colors'

const Container = styled.ul`
  color: ${red};
  padding: 10px 0;
  border-top: 2px solid ${darkgray};
  border-bottom: 2px solid ${darkgray};
`

const productOffers = [
  'spend $50, ship free',
  '$25 gift card with purchase of a select Ninja Blender'
]

const ProductOffer = styled.li`
  line-height: 20px;
  font-size: 16px;
  & > span:first-child {
    font-size: 20px;
    margin-right: 10px;
  }
`

const productOfferElements = productOffers.map(p =>
  <ProductOffer key={p}>
    <span className="icon-tag" />
    <span>
      {p}
    </span>
  </ProductOffer>
)

const ProductOffers = () => {
  return (
    <Container>
      {productOfferElements}
    </Container>
  )
}

export default ProductOffers

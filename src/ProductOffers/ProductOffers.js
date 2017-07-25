import React from 'react'
import styled from 'styled-components'
import { red, mediumgray } from '../colors'

const Container = styled.ul`
  color: ${red};
  padding: 10px 0;
  border-top: 1px solid ${mediumgray};
  border-bottom: 1px solid ${mediumgray};
`

const productOffers = [
  'spend $50, ship free',
  '$25 gift card with purchase of a select Ninja Blender'
]

const ProductOffer = styled.li`
  font-size: 16px;
  display: flex;
  & > div:first-child {
    font-size: 20px;
    margin-right: 8px;
  }
  & > div:last-child {
    line-height: 20px;
  }
`

const productOfferElements = productOffers.map(p =>
  <ProductOffer key={p}>
    <div className="icon-tag" />
    <div>
      {p}
    </div>
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

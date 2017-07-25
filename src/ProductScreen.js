import React from 'react'
import * as T from 'prop-types'
import styled from 'styled-components'
import ImageCarousel from './ImageCarousel'
import PriceInfo from './PriceInfo'
import ProductHighlights from './ProductHighlights'
import OrderControl from './OrderControl'
import ProductRatings from './ProductRatings'
import ProductOffers from './ProductOffers'
import * as screenSizes from './screenSizes'

const ProductScreenContainer = styled.div`
  padding: 20px;
  max-width: ${screenSizes.desktop + 100}px;
  min-width: ${screenSizes.mobile}px;
  margin: auto;
`

//media query in here
const MainSection = styled.div`
  @media screen and (min-width: ${screenSizes.tablet}px) {
    display: flex;
    justify-content: space-between;
  }
`

//padding, etc here
const Section = styled.div`
  border: 1px solbid black;
  padding: 10px;
  width: 100%;
`

const Title = styled.h1`
  font-weight: 300;
  font-size: 28px;
  text-align: center;
`

const ProductScreen = ({ images, title, priceInfo, purchasingChannelCode }) => {
  return (
    <ProductScreenContainer>
      <MainSection>
        <Section>
          <Title>
            {title}
          </Title>
          <ImageCarousel images={images} />
        </Section>
        <Section>
          <PriceInfo
            price={priceInfo.formattedPriceValue}
            priceQualifier={priceInfo.priceQualifier}
          />
          <ProductOffers />
          <OrderControl purchasingChannelCode={purchasingChannelCode} />
          <ProductHighlights />
        </Section>
      </MainSection>
      <Section>
        <ProductRatings />
      </Section>
    </ProductScreenContainer>
  )
}

ProductScreen.propTypes = {
  title: T.string.isRequired,
  images: T.arrayOf(T.string).isRequired,
  priceInfo: T.shape({
    formattedPriceValue: T.string.isRequired,
    priceQualifier: T.string.isRequired
  }).isRequired,
  purchasingChannelCode: T.number.isRequired
}

export default ProductScreen

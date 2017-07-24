import React from 'react'
import * as T from 'prop-types'
import styled from 'styled-components'
import ImageCarousel from './ImageCarousel'
import PriceInfo from './PriceInfo'
import ProductHighlights from './ProductHighlights'
import Rating from './Rating'
import OrderControl from './OrderControl'

const screenSizes = {
  desktop: 992,
  tablet: 768,
  mobile: 480
}

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

const ProductScreen = ({ images, title, priceInfo, purchasingChannelCode }) => {
  return (
    <ProductScreenContainer>
      <MainSection>
        <Section>
          <div>
            {title}
          </div>
          <ImageCarousel images={images} />
        </Section>
        <Section>
          <PriceInfo
            price={priceInfo.formattedPriceValue}
            priceQualifier={priceInfo.priceQualifier}
          />
          <OrderControl purchasingChannelCode={purchasingChannelCode} />
          <ProductHighlights />
        </Section>
      </MainSection>
      <Section>
        <div>
          Product Reviews: <br />
          <Rating rating={3} />
        </div>
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

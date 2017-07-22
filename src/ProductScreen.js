import React from 'react'
import * as T from 'prop-types'
import styled from 'styled-components'
import ImageCarousel from './ImageCarousel'

const ProductScreenContainer = styled.div`padding: 20px;`

//media query in here
const MainSection = styled.div``

//padding, etc here
const Section = styled.div``

const ProductScreen = ({ images }) => {
  return (
    <ProductScreenContainer>
      <MainSection>
        <Section>
          <div>Product Title</div>
          <ImageCarousel images={images}></ImageCarousel>
        </Section>
        <Section>
          <div>Price and offers!</div>
          <div>Quantity and order widget</div>
          <div>PRoduct highlights</div>
        </Section>
      </MainSection>
      <Section>
        <div>Product Reviews</div>
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
  }).isRequired
}

export default ProductScreen

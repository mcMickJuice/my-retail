import React from 'react'
import * as T from 'prop-types'
import styled from 'styled-components'
import ImageCarousel from '../ImageCarousel'
import PriceInfo from '../PriceInfo'
import ProductHighlights from '../ProductHighlights'
import OrderControl from '../OrderControl'
import ProductRatings from '../ProductRatings'
import ProductOffers from '../ProductOffers'
import * as screenSizes from '../screenSizes'

const Container = styled.div`
  padding: 20px;
  max-width: ${screenSizes.desktop + 100}px;
  min-width: ${screenSizes.tinymobile}px;
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
  padding: 10px;
  width: 100%;
`

const Title = styled.h1`
  font-weight: 300;
  font-size: 28px;
  text-align: center;
`
//hack to get ProductRatings to move positioning based on screen sizes...
//could probably figure this out with flex ordering
const SectionMobile = Section.extend`
  @media screen and (min-width: ${screenSizes.tablet}px) {
    display: none;
  }
`

const SectionTabletOrBigger = Section.extend`
  @media screen and (max-width: ${screenSizes.tablet}px) {
    display: none;
  }
`

const ProductScreen = ({ images, title, priceInfo, purchasingChannelCode }) => {
  return (
    <Container>
      <MainSection>
        <Section>
          <Title>
            {title}
          </Title>
          <ImageCarousel images={images} />
          <SectionTabletOrBigger>
            <ProductRatings />
          </SectionTabletOrBigger>
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
      <SectionMobile>
        <ProductRatings />
      </SectionMobile>
    </Container>
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

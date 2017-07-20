import React from 'react'
import styled from 'styled-components'

const ProductScreen = styled.div`padding: 20px;`

//media query in here
const MainSection = styled.div``

//padding, etc here
const Section = styled.div``

const App = () => {
  return (
    <ProductScreen>
      <MainSection>
        <Section>
          <div>Product Title</div>
          <div>Carousel</div>
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
    </ProductScreen>
  )
}

export default App

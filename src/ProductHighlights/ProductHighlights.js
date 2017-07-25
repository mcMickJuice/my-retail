import React from 'react'
import styled from 'styled-components'
import { darkgray } from '../colors'

const highlights = [
  'Wattage Output: 1100 Watts',
  'Number of Speeds: 3 ',
  'Capacity (volume): 72.0 Oz.',
  'Appliance Capabilities: Blends',
  'Includes: Travel Lid',
  'Material: Plastic',
  'Finish: Painted',
  'Metal Finish: Chrome',
  'Safety and Security Features: Non-Slip Base',
  'Care and Cleaning: Easy-To-Clean, Dishwasher Safe Parts'
]

const HighlightTitle = styled.h3`
  font-size: 28px;
  font-weight: 500;
  margin-bottom: 20px;
`

const HighlightList = styled.ul`
  list-style-type: disc;
  margin-left: 16px;
`

const Highlight = styled.li`
  color: ${darkgray};
  font-size: 13px;
  line-height: 20px;
`

const highlightElements = highlights.map(h =>
  <Highlight key={h}>
    {h}
  </Highlight>
)

const ProductHighlights = () => {
  return (
    <div>
      <HighlightTitle>product highlights</HighlightTitle>
      <HighlightList>
        {highlightElements}
      </HighlightList>
    </div>
  )
}

export default ProductHighlights

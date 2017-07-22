import React from 'react'
import * as T from 'prop-types'
import styled from 'styled-components'
import { red, lightgray } from './colors'

const maxRating = 5

const Star = styled.i.attrs({
  className: 'icon-star-full'
})`
  color: ${props => (props.isRated ? red : lightgray)}
`

const Rating = ({ rating }) => {
  const stars = Array.from({ length: maxRating }).map((i, idx) => {
    return <Star key={i} isRated={idx + 1 <= rating} />
  })

  return (
    <div>
      {stars}
    </div>
  )
}

Rating.propTypes = {
  rating: T.number.isRequired
}

export default Rating

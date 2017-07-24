import React from 'react'
import * as T from 'prop-types'
import styled from 'styled-components'
import { red, darkgray } from '../colors'

const maxRating = 5

const Star = styled.i.attrs({
  className: 'icon-star-full'
})`
  color: ${props => (props.isRated ? red : darkgray)};
  font-size: ${props => (props.large ? '20px' : '16px')}
`

const Rating = ({ rating, large }) => {
  const stars = Array.from({ length: maxRating }).map((i, idx) => {
    return <Star key={idx} large={large} isRated={idx + 1 <= rating} />
  })

  return (
    <span>
      {stars}
    </span>
  )
}

Rating.propTypes = {
  rating: T.number.isRequired,
  large: T.bool
}

export default Rating

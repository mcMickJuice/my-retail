import React from 'react'
import * as T from 'prop-types'
import styled from 'styled-components'
import Rating from './Rating'
import { darkgray } from '../colors'

const Container = styled.div``

const Title = styled.h4`
  font-weight: 600;
  font-size: 13px;
  margin: 5px 0;
`

const ReviewText = styled.p`
  font-size: 12px;
  color: ${darkgray};
  line-height: 18px;
  padding-right: 5px;
  margin-bottom: 5px;
`

const Review = ({ rating, reviewTitle, review, reviewer, date }) => {
  return (
    <Container>
      <Rating rating={rating} />
      <Title>
        {reviewTitle}
      </Title>
      <ReviewText>
        {review}
      </ReviewText>
      <ReviewText>
        <a href="#">{reviewer}</a> {date}
      </ReviewText>
    </Container>
  )
}

Review.propTypes = {
  rating: T.number.isRequired,
  reviewTitle: T.string.isRequired,
  review: T.string.isRequired,
  reviewer: T.string.isRequired,
  date: T.string.isRequired
}

export default Review

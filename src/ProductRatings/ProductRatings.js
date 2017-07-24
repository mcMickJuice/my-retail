import React from 'react'
import styled from 'styled-components'
import Rating from './Rating'
import Review from './Review'
import { lightgray } from '../colors'

const Container = styled.div``

const RatingHeader = styled.div`
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
`

const RatingBody = styled.div`
  background-color: ${lightgray};
  min-height: 200px;
  padding: 10px;
  display: flex;
`

const RatingColumn = styled.div`width: 50%;`

const proReviewText =
  'This blender works amazingly, and blends within seconds. The single serve cups also work really well for smoothies or protein shakes'

const proReview = (
  <Review
    rating={5}
    reviewTitle="Fantastic Blender"
    review={proReviewText}
    reviewer="Eric"
    date="April 18, 2013"
  />
)
/* eslint-disable quotes */
const conReviewText =
  "Less than 2 months after purchase it completely stopped working. First it wouldn't detect the pitcher when trying to blend a significant amount, a couple weeks later it wouldn't detect the single serve cup"
/* eslint-enable quotes */

const conReview = (
  <Review
    rating={1}
    reviewTitle="Very unhappy"
    review={conReviewText}
    reviewer="New York"
    date="March 11, 2013"
  />
)

const ProductRatings = () => {
  return (
    <Container>
      <RatingHeader>
        <div>
          <Rating rating={5} large />
          <strong>overall</strong>
        </div>
        <div>
          <strong>view all 14 reviews</strong>
        </div>
      </RatingHeader>
      <RatingBody>
        <RatingColumn>
          <div>PRO</div>
          {proReview}
        </RatingColumn>
        <RatingColumn>
          <div>CON</div>
          {conReview}
        </RatingColumn>
      </RatingBody>
    </Container>
  )
}

export default ProductRatings

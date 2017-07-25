import React from 'react'
import styled from 'styled-components'
import Rating from './Rating'
import Review from './Review'
import { lightgray, darkgray } from '../colors'

const Container = styled.div``

const RatingHeader = styled.div`
  padding: 0 10px;
  font-size: 13px;
  margin-bottom: 10px;
  display: flex;
  line-height: 24px;
  font-weight: 600;
  & > *:first-child {
    margin-right: 10px;
  }
  & > *:last-child {
    margin-left: auto;
  }
`

const RatingBody = styled.div`
  background-color: ${lightgray};
  min-height: 200px;
  padding: 15px;
  display: flex;
`

const RatingColumn = styled.div`width: 50%;`
const RatingColumnHeader = styled.div`
  border-bottom: 1px solid ${darkgray};
  padding-bottom: 15px;
  margin-bottom: 15px;
  & > div:first-child {
    text-transform: uppercase;
  }
  & > div:last-child {
    font-size: 12px;
    color: ${darkgray};
  }
`

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
        <Rating rating={5} large />
        <div>overall</div>
        <div>view all 14 reviews</div>
      </RatingHeader>
      <RatingBody>
        <RatingColumn>
          <RatingColumnHeader>
            <div>Pro</div>
            <div>most helpful 4-5 star review</div>
          </RatingColumnHeader>
          {proReview}
        </RatingColumn>
        <RatingColumn>
          <RatingColumnHeader>
            <div>Con</div>
            <div>most helpful 1-2 star review</div>
          </RatingColumnHeader>
          {conReview}
        </RatingColumn>
      </RatingBody>
    </Container>
  )
}

export default ProductRatings

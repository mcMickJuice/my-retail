import React from 'react'
import styled from 'styled-components'
import { mediumgray, darkgray } from '../colors'
import { tablet } from '../screenSizes'

const Container = styled.div`
  cursor: pointer;
  color: ${mediumgray};
  display: none;
  margin-bottom: 16px;
  @media screen and (min-width: ${tablet}px) {
    display: flex;
  }
  & > div:first-child {
    color: ${mediumgray};
    font-size: 28px;
    margin-right: 8px;
  }
  & > div:last-child {
    line-height: 28px;
    color: ${darkgray};
  }
`

const ViewLarger = () =>
  <Container>
    <div className="icon-search-plus" />
    <div>view larger</div>
  </Container>

export default ViewLarger

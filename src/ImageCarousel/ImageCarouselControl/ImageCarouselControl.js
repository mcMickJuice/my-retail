import React from 'react'
import * as T from 'prop-types'
import styled from 'styled-components'
import { getCircularImageIndex } from '../arrayHelpers'
import { mediumgray } from '../../colors'
import { mobile } from '../../screenSizes'

const Container = styled.div`
  display: flex;
  align-items: center;
`

export const ThumbnailButton = styled.button.attrs({
  className: props =>
    props.backwards ? 'icon-chevron-left' : 'icon-chevron-right'
})`
background: none;cursor: pointer;  
border: none;
display:block;
font-size: 36px;
color: ${mediumgray};
@media screen and (max-width: ${mobile}px) {
  display: none;
}
`

export const ImageThumbnail = styled.img`
  width: 75px;
  display: block;
  margin: auto;
`

const ImageThumbnailContainer = styled.div`
  width: 100px;
  padding: 5px;
  &:not(:last-child) {
    margin-right: 10px;
  }
  cursor: pointer;
  display: inline-block;
  border-width: 1px;
  border-style: solid;
  border-radius: 5px;
  &:hover {
    border-color: ${mediumgray};
  }
  border-color: ${props => (props.isSelected ? mediumgray : 'transparent')};
`

const getNextImageIndexes = (currentImageIndex, images) => {
  const firstImageIdx = getCircularImageIndex(
    images.length,
    currentImageIndex - 1
  )
  const nextImageIdx = getCircularImageIndex(
    images.length,
    currentImageIndex + 1
  )
  return [firstImageIdx, currentImageIndex, nextImageIdx]
}

const ImageCarouselControl = ({
  images,
  currentImageIndex,
  navigateBack,
  navigateForward,
  selectImage
}) => {
  const previewImages = getNextImageIndexes(
    currentImageIndex,
    images
  ).map(idx => {
    const img = images[idx]
    return (
      <ImageThumbnailContainer key={img} isSelected={idx === currentImageIndex}>
        <ImageThumbnail
          onClick={() => selectImage(img)}
          src={img}
          alt={`Image Thumbnail ${idx}`}
        />
      </ImageThumbnailContainer>
    )
  })

  return (
    <Container>
      <ThumbnailButton onClick={navigateBack} backwards />
      {previewImages}
      <ThumbnailButton onClick={navigateForward} />
    </Container>
  )
}

ImageCarouselControl.propTypes = {
  images: T.arrayOf(T.string).isRequired,
  currentImageIndex: T.number.isRequired,
  navigateBack: T.func.isRequired,
  navigateForward: T.func.isRequired,
  selectImage: T.func.isRequired
}

export default ImageCarouselControl

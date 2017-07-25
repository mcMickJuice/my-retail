import React from 'react'
import * as T from 'prop-types'
import styled from 'styled-components'
import { getCircularImageIndex } from '../arrayHelpers'

export const ThumbnailButton = styled.button.attrs({
  className: props =>
    props.backwards ? 'icon-chevron-left' : 'icon-chevron-right'
})``

export const ImageThumbnail = styled.img`width: 75px;`

const ImageThumbnailContainer = styled.div`
  width: 100px;
  padding: 5px;
  margin-right: 10px;
  cursor: pointer;
  display: inline-block;
  border-width: 1px;
  border-style: solid;
  &:hover {
    border-color: black;
  }
  border-color: ${props => (props.isSelected ? 'black' : 'transparent')};
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
  navigateForward
}) => {
  const previewImages = getNextImageIndexes(
    currentImageIndex,
    images
  ).map(idx => {
    const img = images[idx]
    return (
      <ImageThumbnailContainer key={img} isSelected={idx === currentImageIndex}>
        <ImageThumbnail
          onClick={() => this.selectImage(img)}
          src={img}
          alt={`Image Thumbnail ${idx}`}
        />
      </ImageThumbnailContainer>
    )
  })

  return (
    <div>
      <ThumbnailButton onClick={navigateBack} backwards />
      {previewImages}
      <ThumbnailButton onClick={navigateForward} />
    </div>
  )
}

ImageCarouselControl.propTypes = {
  images: T.arrayOf(T.string).isRequired,
  currentImageIndex: T.number.isRequired,
  navigateBack: T.func.isRequired,
  navigateForward: T.func.isRequired
}

export default ImageCarouselControl

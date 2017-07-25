import React, { Component } from 'react'
import * as T from 'prop-types'
import styled from 'styled-components'
import ImageCarouselControl from './ImageCarouselControl'
import { getCircularImageIndex } from './arrayHelpers'

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const CurrentImage = styled.img`
  width: 300px;
  padding: 10px;
`

class ImageCarousel extends Component {
  constructor() {
    super()

    this.onNavigateBack = this.onNavigateBack.bind(this)
    this.onNavigateForward = this.onNavigateForward.bind(this)
    this.onSelectImage = this.onSelectImage.bind(this)

    this.state = {
      currentImageIndex: 0
    }
  }

  onNavigateBack() {
    const { images } = this.props
    const step = -1
    this.setState(prevState => {
      const nextImgIdx = prevState.currentImageIndex + step
      return {
        currentImageIndex: getCircularImageIndex(images.length, nextImgIdx)
      }
    })
  }

  onNavigateForward() {
    const { images } = this.props
    const step = 1
    this.setState(prevState => {
      const nextImgIdx = prevState.currentImageIndex + step
      return {
        currentImageIndex: getCircularImageIndex(images.length, nextImgIdx)
      }
    })
  }

  onSelectImage(image) {
    const { images } = this.props
    const imageIdx = images.indexOf(image)
    if (this.state.currentImageIndex === imageIdx) return

    this.setState(() => ({
      currentImageIndex: imageIdx
    }))
  }

  render() {
    const { images } = this.props
    const { currentImageIndex } = this.state
    const currentImage = images[currentImageIndex]

    return (
      <Container>
        <div>
          <CurrentImage
            key={currentImage}
            src={currentImage}
            alt="Current Image"
          />
        </div>
        <ImageCarouselControl
          images={images}
          currentImageIndex={currentImageIndex}
          navigateBack={this.onNavigateBack}
          navigateForward={this.onNavigateForward}
          selectImage={this.onSelectImage}
        />
      </Container>
    )
  }
}

ImageCarousel.propTypes = {
  images: T.arrayOf(T.string).isRequired
}

export default ImageCarousel

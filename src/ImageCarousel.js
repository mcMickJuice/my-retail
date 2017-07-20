import React, { Component } from 'react'
import * as T from 'prop-types'

class ImageCarousel extends Component {
  constructor() {
    super()

    this.state = {
      currentPhotoIndex: 0
    }
  }

  navigateImage(isBackwards) {
    this.setState((prevState, props) => {
      const prevIndex = prevState.currentPhotoIndex
      let nextIndex
      if (isBackwards) {
        nextIndex = Math.max(0, prevIndex - 1)
      } else {
        nextIndex = Math.min(props.images.length - 1, prevIndex + 1)
      }
      return {
        currentPhotoIndex: nextIndex
      }
    })
  }

  render() {
    return (
      <div>
        <div>Current Image</div>
        <div>All Images</div>
      </div>
    )
  }
}

ImageCarousel.propTypes = {
  primaryImage: T.string.isRequired,
  images: T.arrayOf(T.string).isRequired
}

export default ImageCarousel

import React from 'react'
import ImageCarousel from './ImageCarousel'
import { shallow } from 'enzyme'

let imageCarouselInstance;
const images = ['hi', 'hey', 'how are ya']
beforeEach(() => {
  imageCarouselInstance = shallow(
    <ImageCarousel images={images} />
  ).instance()
})

describe('ImageCarousel', () => {
  test('should have a default currentImageIndex of 0', () => {
    expect(imageCarouselInstance.state.currentImageIndex).toBe(0)
  })

  test('should increment currentImageIndex on navigateImage forwards', () => {
    imageCarouselInstance.navigateImage(true)
    expect(imageCarouselInstance.state.currentImageIndex).toBe(1)
  })

  test('should decrement currentImageIndex on navigateImage backwards', () => {
    imageCarouselInstance.state.currentImageIndex = 2
    imageCarouselInstance.navigateImage(false)
    expect(imageCarouselInstance.state.currentImageIndex).toBe(1)
  })

  test('should wrap to lastImage on decrement past 0', () => {
    imageCarouselInstance.state.currentImageIndex = 0
    imageCarouselInstance.navigateImage(false)
    expect(imageCarouselInstance.state.currentImageIndex).toBe(images.length - 1)
  })

  test('should wrap to firstImage on increment past images.length', () => {
    imageCarouselInstance.state.currentImageIndex = images.length - 1
    imageCarouselInstance.navigateImage(true)
    expect(imageCarouselInstance.state.currentImageIndex).toBe(0)
  })
})

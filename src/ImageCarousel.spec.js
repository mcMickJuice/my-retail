import React from 'react'
import ImageCarousel from './ImageCarousel'
import { shallow } from 'enzyme'

let imageCarouselInstance
beforeEach(() => {
  imageCarouselInstance = shallow(
    <ImageCarousel primaryImage="" images={['hi', 'hey', 'how are ya']} />
  ).instance()
})

describe('ImageCarousel', () => {
  test('should have a default currentPhotoIndex of 0', () => {
    expect(imageCarouselInstance.state.currentPhotoIndex).toBe(0)
  })

  test('should increment currentPhotoIndex on navigateImage forwards', () => {
    imageCarouselInstance.navigateImage(false)
    expect(imageCarouselInstance.state.currentPhotoIndex).toBe(1)
  })

  test('should decrement currentPhotoIndex on navigateImage backwards', () => {
    imageCarouselInstance.state.currentPhotoIndex = 2
    imageCarouselInstance.navigateImage(true)
    expect(imageCarouselInstance.state.currentPhotoIndex).toBe(1)
  })

  test('should not decrement past lowerBound of 0', () => {
    imageCarouselInstance.state.currentPhotoIndex = 0
    imageCarouselInstance.navigateImage(true)
    expect(imageCarouselInstance.state.currentPhotoIndex).toBe(0)
  })

  test('should not increment past upperbound of image count', () => {
    imageCarouselInstance.state.currentPhotoIndex = 2
    imageCarouselInstance.navigateImage(false)
    expect(imageCarouselInstance.state.currentPhotoIndex).toBe(2)
  })
})

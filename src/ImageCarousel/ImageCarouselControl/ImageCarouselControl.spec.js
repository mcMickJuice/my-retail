import React from 'react'
import { shallow } from 'enzyme'
import ImageCarouselControl, {
  ImageThumbnail,
  ThumbnailButton
} from './ImageCarouselControl'

const images = ['image/1', 'image/2', 'image/3', 'image/4']

describe('ImageCarouselControl', () => {
  test('should display previous, current and next image', () => {
    const element = shallow(
      <ImageCarouselControl
        images={images}
        currentImageIndex={1}
        navigateBack={jest.fn()}
        navigateForward={jest.fn()}
      />
    )
    const thumbnails = element.find(ImageThumbnail).nodes

    expect(thumbnails[0].props.src).toBe(images[0])
    expect(thumbnails[1].props.src).toBe(images[1])
    expect(thumbnails[2].props.src).toBe(images[2])
  })

  test('should display previous image as last image if currentidx is 0', () => {
    const element = shallow(
      <ImageCarouselControl
        images={images}
        currentImageIndex={0}
        navigateBack={jest.fn()}
        navigateForward={jest.fn()}
      />
    )
    const thumbnails = element.find(ImageThumbnail).nodes

    expect(thumbnails[0].props.src).toBe(images[images.length - 1])
  })

  test('should call onNavigateBack when navigateBack button is clicked', () => {
    const mockNavigateBack = jest.fn()
    const element = shallow(
      <ImageCarouselControl
        images={images}
        currentImageIndex={0}
        navigateBack={mockNavigateBack}
        navigateForward={jest.fn()}
      />
    )

    const navigateBackButton = element.find(ThumbnailButton)

    navigateBackButton.nodes[0].props.onClick()

    expect(mockNavigateBack).toHaveBeenCalled()
  })
  test('should call onNavigateForward when navigateForward button is clicked', () => {
    const mockNavigateForward = jest.fn()
    const element = shallow(
      <ImageCarouselControl
        images={images}
        currentImageIndex={0}
        navigateBack={jest.fn()}
        navigateForward={mockNavigateForward}
      />
    )

    const navigateBackButton = element.find(ThumbnailButton)

    navigateBackButton.nodes[1].props.onClick()

    expect(mockNavigateForward).toHaveBeenCalled()
  })
})

import React, { Component } from 'react'
import * as T from 'prop-types'
import styled from 'styled-components';

const CurrentImage = styled.img`
  width: 300px;
  padding: 10px;
`;

const ImageThumbnail = styled.img`width: 75px;`;

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
  };
  border-color: ${props => (props.isSelected ? 'black' : 'transparent')};
`;

const getCircularImageIndex = (imagesLength, nextIdx) => {
  let firstImageIdx = nextIdx % imagesLength;
  return firstImageIdx < 0 ? imagesLength - 1 : firstImageIdx;
};

const getNextImageIndexes = (currentImageIndex, images) => {
  const firstImageIdx = getCircularImageIndex(
    images.length,
    currentImageIndex - 1
  );
  const nextImageIdx = getCircularImageIndex(
    images.length,
    currentImageIndex + 1
  );
  return [firstImageIdx, currentImageIndex, nextImageIdx];
};

class ImageCarousel extends Component {
  constructor() {
    super();

    this.navigateImage = this.navigateImage.bind(this);
    this.selectImage = this.selectImage.bind(this);

    this.state = {
      currentImageIndex: 0
    };
  }

  navigateImage(isForward) {
    const { images } = this.props;
    const step = isForward ? 1 : -1;
    this.setState(prevState => {
      const nextImgIdx = prevState.currentImageIndex + step;
      return {
        currentImageIndex: getCircularImageIndex(images.length, nextImgIdx),
      };
    });
  }

  selectImage(image) {
    const { images } = this.props;
    const imageIdx = images.indexOf(image);
    if (this.state.currentImageIndex === imageIdx) return;

    this.setState(() => ({
      currentImageIndex: imageIdx,
    }));
  }

  render() {
    const { images } = this.props;
    const { currentImageIndex } = this.state;
    const currentImage = images[currentImageIndex];

    const previewImages = getNextImageIndexes(
      currentImageIndex,
      images
    ).map(idx => {
      const img = images[idx];
      return (
        <ImageThumbnailContainer
          key={img}
          isSelected={idx === currentImageIndex}
        >
          <ImageThumbnail
            onClick={() => this.selectImage(img)}
            src={img}
            alt={`Image Thumbnail ${idx}`}
          />
        </ImageThumbnailContainer>
      );
    });

    return (
      <div>
        <div>
          <CurrentImage
            key={currentImage}
            src={currentImage}
            alt="Current Image"
          />
        </div>
        <div>
          {previewImages}
        </div>

        <button onClick={() => this.navigateImage(false)}>
          Previous Image
        </button>
        <button onClick={() => this.navigateImage(true)}>Next Image</button>
      </div>
    );
  }
}

ImageCarousel.propTypes = {
  images: T.arrayOf(T.string).isRequired
}

export default ImageCarousel

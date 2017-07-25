//simulate circular buffer of images
export const getCircularBufferIndex = (imagesLength, nextIdx) => {
  let firstImageIdx = nextIdx % imagesLength
  return firstImageIdx < 0 ? imagesLength - 1 : firstImageIdx
}

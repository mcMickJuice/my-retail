export const getCircularImageIndex = (imagesLength, nextIdx) => {
  let firstImageIdx = nextIdx % imagesLength
  return firstImageIdx < 0 ? imagesLength - 1 : firstImageIdx
}

const itemData = require('./item-data.json')

function getProductData() {
  const firstProduct = itemData.CatalogEntryView[0]
  const title = firstProduct.title
  const imageObject = firstProduct.Images[0]
  const images = [
    ...imageObject.PrimaryImage,
    ...imageObject.AlternateImages
  ].map(imageObj => imageObj.image)

  const {
    formattedPriceValue,
    priceQualifier
  } = firstProduct.Offers[0].OfferPrice[0]

  return Promise.resolve({
    title,
    images,
    priceInfo: {
      formattedPriceValue,
      priceQualifier
    }
  })
}

module.exports = getProductData

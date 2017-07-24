const itemData = require('./item-data.json')

function getProductData() {
  const firstProduct = itemData.CatalogEntryView[0]
  const { title, purchasingChannelCode } = firstProduct
  const purchasingChannelCodeNumber = Number(purchasingChannelCode)
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
    purchasingChannelCode: purchasingChannelCodeNumber,
    images,
    priceInfo: {
      formattedPriceValue,
      priceQualifier
    }
  })
}

module.exports = getProductData

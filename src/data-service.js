const axios = require('axios')

module.exports.getProductData = function getProductData() {
  return axios.get('/api/product').then(response => response.data)
}

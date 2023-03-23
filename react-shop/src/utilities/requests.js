import axios from 'axios'

export const getProducts = () => {
  const productListUrl = "http://0.0.0.0:3001/products"
  return axios.get(productListUrl)
}

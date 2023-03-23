import { useEffect, useState } from 'react'
import { getProducts } from '../utilities/requests'
import Product from './Product'

const ProductList = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getProducts()
      .then((res) => {
        setProducts(res.data)
        setLoading(false)
      })
      .catch((error) => setError(error))
  }, [])

  return (
    <>
      <h1>Products</h1>
      <section className="products--list">
        {products.length > 0 &&
          products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
      </section>
    </>
  )
}

export default ProductList

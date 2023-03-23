import Unsplash from 'react-unsplash-wrapper'

const Product = ({ product }) => {
  return (
    <div className="card m-4 p-2">
      <div className="card-image">
        <figure className="image">
          <Unsplash width="200" height="200" keywords={`object, ${product.image && product.image.keyword}`} img/>
        </figure>
      </div>
      <div className="card-content">
        <div className="content">
          <h2 className="title is-4">{product.name}</h2>
          <div className="content">{product.description}</div>
        </div>
      </div>
    </div>
  )
}

export default Product

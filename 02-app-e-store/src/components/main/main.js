import './main.css'

const Product = ({ product }) => {
  return (
    <div className={`product ${product.soldOut ? 'sold-out' : null}`}>
      <img src={product.photoName} alt=""></img>
      <div>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <span>{product.soldOut ? 'SOLD-OUT' : `$${product.price}`}</span>
      </div>
    </div>
  )
}

export const Catalog = ({ products }) => {
  return (
    <div className="catalog">
      <div className="products">
        {products.map((product, index) => (
          <Product product={product} key={index} />
        ))}
      </div>
    </div>
  )
}

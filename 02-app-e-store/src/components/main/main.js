import './main.css'

const Product = ({ product }) => {
  return (
    <div className="product">
      <img src={product.photoName} alt=""></img>
      <div>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <span>${product.price}</span>
      </div>
    </div>
  )
}

const Catalog = ({ catalog }) => {
  return (
    <div className="products">
      {catalog.map((product, index) => (
        <Product product={product} key={index} />
      ))}
    </div>
  )
}

export const Main = ({ catalog }) => {
  return (
    <div className="catalog">
      <Catalog catalog={catalog} />
    </div>
  )
}

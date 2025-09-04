import { useParams } from 'react-router-dom'
import { products } from '../data/data'

export const ProductDetail = () => {
  const { productId } = useParams()

  const [product] = products.filter((product) => product.id === Number(productId))
  console.log(productId, product)

  return (
    <div>
      {product ? (
        <>
          <h1>Product details</h1>
          <img src={product.img} alt={product.name} style={{ width: '150px' }} />
          <h2>Товар: {product.name}</h2>
          <div>Цена: ${product.price}</div>
          <div>Тип: {product.categoryId}</div>
        </>
      ) : (
        'Not found'
      )}
    </div>
  )
}

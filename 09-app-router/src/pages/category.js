import { Link, useLocation, useParams, useSearchParams } from 'react-router-dom'
import { products } from '../data/data'
import { useEffect } from 'react'

export const Category = () => {
  const { categoryId } = useParams()
  const [maxCost, setMaxCost] = useSearchParams()
  const location = useLocation()

  useEffect(() => {
    location.state?.maxPrice && setMaxCost({ cost: location.state.maxPrice })
  }, [location, setMaxCost])

  const maxPrice = maxCost.get('cost') && Number(maxCost.get('cost'))
  const currentProducts = products.filter((product) => product.categoryId === categoryId && (!maxPrice || (maxPrice && product.price <= maxPrice)))

  const handlerChangeCost = ({ target }) => {
    setMaxCost({ cost: target.value })
  }

  return (
    <div>
      <>
        <h1>{categoryId}</h1>
        <input type="number" onChange={handlerChangeCost} value={maxPrice || ''} />
        <p>Max cost: {maxPrice}</p>
        <ul style={{ display: 'flex' }}>
          {currentProducts.map((product) => (
            <li key={product.id}>
              <Link to={`/product/${product.id}`}>
                <p>
                  {product.name} ${product.price}
                </p>
                <img src={product.img} alt={product.name} style={{ width: '150px' }} />
              </Link>
            </li>
          ))}
        </ul>
      </>
    </div>
  )
}

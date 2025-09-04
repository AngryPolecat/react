import { Link } from 'react-router-dom'
import { categories } from '../data/data'

export const Home = () => {
  return (
    <div>
      <Link to={'/category/electronics'} state={{ maxPrice: 1000 }}>
        Electronics cost up to $1000
      </Link>
      <ul style={{ display: 'flex' }}>
        {categories.map((category) => (
          <li key={category.id}>
            <Link to={`/category/${category.id}`}>
              <p>{category.name}</p>
              <img src={category.img} alt={category.name} style={{ width: '150px' }} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

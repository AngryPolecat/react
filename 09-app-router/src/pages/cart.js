import { Link } from 'react-router-dom'

export const Cart = () => {
  return (
    <div>
      Cart Page
      <Link to={'/thanks'}>
        <button>Order</button>
      </Link>
    </div>
  )
}

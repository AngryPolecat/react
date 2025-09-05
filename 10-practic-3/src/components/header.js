import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div className="header">
      <Link to={'/'}>Home</Link>
      <Link to={'/about'}>About</Link>
      <Link to={'/search'}>Search</Link>
      <Link to={'/login'}>Login</Link>
    </div>
  )
}

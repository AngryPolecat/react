import { NavLink } from 'react-router-dom'
import './header.css'

export const Header = () => {
  return (
    <div>
      Header
      <NavLink to={'/'}>Home</NavLink>
      <NavLink to={'about'}>About</NavLink>
      <NavLink to={'cart'}>Cart</NavLink>
    </div>
  )
}

import { useLocation } from 'react-router-dom'

export const Home = () => {
  const location = useLocation()

  return (
    <div>
      Главная страница <p>{location.state?.login ? location.state?.login : ''}</p>
    </div>
  )
}

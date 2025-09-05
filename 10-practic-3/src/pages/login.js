import { Link, useNavigate } from 'react-router-dom'

export const Login = () => {
  const navigate = useNavigate()

  return (
    <div className="login">
      <p>Пример редиректа при логине</p>
      <Link to="/" state={{ login: 'You are logged in' }}>
        Log in
      </Link>
      <button
        onClick={() =>
          navigate('/', {
            state: { login: 'You are not logged in' },
          })
        }
      >
        Forgot login
      </button>
    </div>
  )
}

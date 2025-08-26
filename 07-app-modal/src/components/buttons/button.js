import './button.css'

export const Button = ({ handlerClick, type, children }) => {
  return (
    <button onClick={handlerClick} className={type}>
      {children}
    </button>
  )
}

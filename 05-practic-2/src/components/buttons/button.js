import './button.css'

export const Button = ({ type, click, active, disabled, children }) => {
  return (
    <button className={`${type} ${active ? 'active' : ''}`} onClick={click} disabled={disabled}>
      {children}
    </button>
  )
}

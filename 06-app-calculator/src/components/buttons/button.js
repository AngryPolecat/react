import './button.css'

export const Button = ({ type, click, idx, children }) => {
  return (
    <button className={type} onClick={() => click(idx)}>
      {children}
    </button>
  )
}

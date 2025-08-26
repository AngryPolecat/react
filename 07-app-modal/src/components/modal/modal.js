import './modal.css'

export const Modal = ({ handlerClick, header, content, children }) => {
  return (
    <div className="overlay" onClick={handlerClick}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2 className="modalHeader">{header}</h2>
        <div className="modalBody">{content}</div>
        <div className="modalFooter">{children}</div>
      </div>
    </div>
  )
}

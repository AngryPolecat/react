import { useState } from 'react'
import './App.css'

export const App = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [count, setCount] = useState(0)
  const [focus, setFocus] = useState('')

  const increaseCount = () => {
    count >= 3 || setCount((prev) => prev + 1)
  }

  const decreaseCount = () => {
    count <= 0 || setCount((prev) => prev - 1)
  }

  const close = () => {
    setIsOpen(false)
    setCount(0)
    setFocus(0)
  }

  return (
    <div className="App">
      {!isOpen ? (
        <button onClick={() => setIsOpen(true)}>Начало</button>
      ) : (
        <>
          <span className="cross" onClick={close}>
            &times;
          </span>
          <h1>Vite + React = {count >= 3 && 'Love'}</h1>
          <div className="logo-container">
            <img src="/vite.svg" className={`logo ${count >= 1 || focus === 'vite' ? 'active' : ''}`} onMouseEnter={() => setFocus('vite')} onMouseLeave={() => setFocus('')} alt="Vite logo" />
            <p>+</p>
            <img src="/react.svg" className={`logo ${count >= 2 || focus === 'react' ? 'active' : ''}`} onMouseEnter={() => setFocus('react')} onMouseLeave={() => setFocus('')} alt="React logo" />
            <p>=</p>
            <img src="/love.svg" className={`logo ${count >= 3 || focus === 'love' ? 'active' : ''}`} onMouseEnter={() => setFocus('love')} onMouseLeave={() => setFocus('')} alt="Love logo" />
          </div>
          <hr />
          <div className="card">
            <p className="count-paragraph">count is {count}</p>
            <div className="increment-buttons">
              <button onClick={increaseCount}>+1</button>
              <button onClick={decreaseCount}>-1</button>
              <button onClick={() => setCount(0)}>Reset</button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

/* 
<button onClick={setBegin(1)}>Начать</button>
<span className="cross">&times;</span>
    <h1>Vite + React = Love</h1>
    <div className="logo-container">
      <img src="/vite.svg" className="logo" alt="Vite logo" />
      <p>+</p>
      <img src="/react.svg" className="logo" alt="React logo" />
      <p>=</p>
      <img src="/love.svg" className="logo" alt="Love logo" />
    </div>
    <hr />
    <div className="card">
      <p className="count-paragraph">count is 0</p>
      <div className="increment-buttons">
        <button>+1</button>
        <button>-1</button>
        <button>Reset</button>
      </div>
    </div> */

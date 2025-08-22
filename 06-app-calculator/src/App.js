import { useState } from 'react'
import './App.css'
import { Button, Display, Footer, Header } from './components'

const buttons = [
  { name: 1, type: null, action: '1' },
  { name: 2, type: null, action: '2' },
  { name: 3, type: null, action: '3' },
  { name: '+', type: 'operator', action: '+' },
  { name: 4, type: null, action: '4' },
  { name: 5, type: null, action: '5' },
  { name: 6, type: null, action: '6' },
  { name: '-', type: 'operator', action: '-' },
  { name: 7, type: null, action: '7' },
  { name: 8, type: null, action: '8' },
  { name: 9, type: null, action: '9' },
  { name: '×', type: 'operator', action: '*' },
  { name: 0, type: null, action: '0' },
  { name: ',', type: null, action: '.' },
  { name: '=', type: 'equals', action: '=' },
  { name: '÷', type: 'operator', action: '/' },
  { name: 'C', type: 'clear', action: 'C' },
]

export const App = () => {
  const [display, setDisplay] = useState('0')
  const [argLeft, setArgLeft] = useState(0)
  const [argRight, setArgRight] = useState(0)
  const [operator, setOperator] = useState('')

  const handlerClickButton = (index) => {
    const action = buttons[index].action
    const type = buttons[index].type
    const name = buttons[index].name

    if (!type) {
      if (display.length < 15) {
        console.log(action, display.indexOf(','), display.length)

        //if (action !== '.' || (action === '.' && display.indexOf(',') === -1 && display !== '0')) {
        const result = !argRight ? action.toString() : display + action.toString()
        setDisplay(result)
        setArgRight(Number(result))
        //}
      }
    } else {
      if (type === 'clear') {
        setDisplay('0')
        setArgLeft(0)
        setArgRight(0)
        setOperator('')
      } else {
        if (operator) {
          const result = eval(`${argLeft}${operator}${argRight}`)
          setDisplay(result.toString())
          setArgRight(0)
          setArgLeft(result)
          if (type === 'operator') {
            setOperator(action)
          } else {
            setOperator('')
          }
        } else {
          type === 'operator' && setOperator(action)
          argRight && setArgLeft(argRight)
          setArgRight(0)
        }
      }
    }
  }

  const increment = () => {
    setArgLeft((prev) => prev + 1)
    setDisplay((prev) => (Number(prev) + 1).toString())
  }

  const decrement = () => {
    setArgLeft((prev) => prev - 1)
    setDisplay((prev) => (Number(prev) - 1).toString())
  }

  return (
    <div className="App">
      <div className="calculator-container">
        <Header />
        <div className="calculator">
          <Display>{display}</Display>
          <div className="increment-buttons">
            <Button type="increment" click={increment}>
              +1
            </Button>
            <Button type="decrement" click={decrement}>
              -1
            </Button>
          </div>
          <div className="buttons">
            {buttons.map((button, index) => (
              <Button type={button.type} key={index} click={handlerClickButton} idx={index}>
                {button.name}
              </Button>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

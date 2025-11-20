import { useState } from 'react'
import Button from './components/Button'
import Label from './components/Label'

const textArray = ['Increment', 'Count + 1', 'Increase', '+1']

const App = () => {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <Label count={count} />
      {textArray.map((text, index) => (
        <Button key={index} onClick={handleIncrement}>
          {text}
        </Button>
      ))}
    </div>
  )
}

export default App

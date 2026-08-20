import { useState } from 'react'
import Button from './Button'
import Counter from './Counter'

const App = () => {
  const [count, setCount] = useState<number>(0)

  const handleDecrement = () => {
    setCount(count - 1)
  }

  const handleIncrement = () => {
    setCount(count + 1)
  }

  const handleReset = () => {
    setCount(0)
  }

  return (
    <div>
      <Counter count={count} />
      <Button caption="Decrement" onClick={handleDecrement} />
      <Button caption="Increment" onClick={handleIncrement} />
      <Button caption="Reset" onClick={handleReset} />
    </div>
  )
}

export default App

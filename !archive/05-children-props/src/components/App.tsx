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
      <Button onClick={handleDecrement}>
        <span>➖</span>
        <span>Зменшити</span>
      </Button>
      <Button onClick={handleIncrement}>
        <span>➕</span>
        <span>Збільшити</span>
      </Button>
      <Button onClick={handleReset}>
        <span>🔄</span>
        <span>Скинути</span>
      </Button>
    </div>
  )
}

export default App

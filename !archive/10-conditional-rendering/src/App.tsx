import { useState } from 'react'
import Counter from './components/Counter'
import Button from './components/Button'

const App = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  const reset = () => {
    setCount(0)
  }

  return (
    <div>
      <Counter count={count} />
      <Button onClick={increment}>Increment</Button>
      <Button onClick={decrement}>Decrement</Button>
      {count !== 0 && <Button onClick={reset}>Reset</Button>}
    </div>
  )
}

export default App

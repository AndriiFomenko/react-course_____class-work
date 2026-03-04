import { useState } from 'react'
import Counter from './components/Counter'
import Button from './components/Button'

const App = () => {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  const reset = () => setCount(0)

  const buttons = [
    { title: '➖ Decrement', onClick: decrement },
    { title: '➕ Increment', onClick: increment },
    { title: '🔄 Reset', onClick: reset }
  ]

  return (
    <div>
      <Counter count={count} />

      {buttons.map(({ title, onClick }, index) => (
        <Button onClick={onClick} key={index}>
          {title}
        </Button>
      ))}
    </div>
  )
}

export default App

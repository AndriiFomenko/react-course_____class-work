import { useState } from 'react'
import Button from './Button'
import Counter from './Counter'

const App = () => {
  const [count, setCount] = useState<number>(0)

  const buttons = [
    {
      id: 'decrement',
      text: 'Зменшити',
      icon: '➖',
      onClick: () => setCount((prev) => prev - 1),
    },
    {
      id: 'increment',
      text: 'Збільшити',
      icon: '➕',
      onClick: () => setCount((prev) => prev + 1),
    },
    {
      id: 'reset',
      text: 'Скинути',
      icon: '🔄',
      onClick: () => setCount(0),
    },
  ]

  return (
    <div>
      <Counter count={count} />
      {buttons.map(({ id, icon, text, onClick }) => (
        <Button key={id} onClick={onClick}>
          <span>{icon}</span>
          <span>{text}</span>
        </Button>
      ))}
    </div>
  )
}

export default App

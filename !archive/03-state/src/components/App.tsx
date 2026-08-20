import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState<number>(0)

  const handleIncrement = () => {
    // setCount(count + 1)
    setCount((prev) => prev + 1)
  }

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}

export default App

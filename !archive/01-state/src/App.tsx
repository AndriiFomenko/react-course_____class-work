import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <p>Count on page: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  )
}

export default App

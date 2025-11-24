import { useEffect, useState } from 'react'

const Test = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('Test Component Mounted')
    return () => {
      console.log('Test Component Unmounted')
    }
  }, [])

  useEffect(() => {
    console.log(`Test Component Updated with value: ${count}`)
  }, [count])

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1)
      console.log('Count updated')
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div>
      <h1>TestComponent</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  )
}

export default Test

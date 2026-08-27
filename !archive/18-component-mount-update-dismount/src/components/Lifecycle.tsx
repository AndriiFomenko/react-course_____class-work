import { useEffect, useState } from 'react'

const Lifecycle = () => {
  const [count, setCount] = useState<number>(0)

  useEffect(() => {
    console.log('Component mounted')
  }, [])

  useEffect(() => {
    console.log(`Component updated. Count is ${count}`)
  }, [count])

  useEffect(() => {
    console.log('Component will unmount')

    const intervalId = setInterval(() => {
      setCount((prev: number) => prev + 1)
      console.log(`Interval tick ${intervalId}`)
    }, 1000)

    return () => {
      console.log(`Component unmounted ${intervalId}`)
      clearInterval(intervalId)
    }
  }, [])

  const increment = () => {
    setCount((prev) => prev + 1)
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  )
}

export default Lifecycle

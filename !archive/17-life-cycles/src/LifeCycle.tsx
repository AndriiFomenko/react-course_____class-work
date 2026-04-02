import { useEffect, useState } from 'react'

const LifeCycle = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('component did mount')

    return () => {
      console.log('component will unmount')
    }
  }, [])

  useEffect(() => {
    console.log('component did update', count)
  }, [count])

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default LifeCycle

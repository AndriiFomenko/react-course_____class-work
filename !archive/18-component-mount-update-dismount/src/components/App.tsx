import { useState } from 'react'
import Lifecycle from './Lifecycle'

const App = () => {
  const [isShow, setIsShow] = useState<boolean>(true)

  const handleToggle = () => {
    setIsShow((prev) => !prev)
  }

  return (
    <div>
      <button onClick={handleToggle}>Toggle</button>
      {isShow ? <Lifecycle /> : null}
    </div>
  )
}

export default App

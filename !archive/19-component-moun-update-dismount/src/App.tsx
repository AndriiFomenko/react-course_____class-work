import { useState } from 'react'
import Test from './components/Test'

const App = () => {
  const [show, setShow] = useState(true)

  const toggleComponent = () => {
    setShow((prevState) => !prevState)
  }

  return (
    <div>
      <button onClick={toggleComponent}>Toggle</button>
      {show && <Test />}
    </div>
  )
}

export default App

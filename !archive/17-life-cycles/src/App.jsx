import LifeCycle from './LifeCycle'
import { useState } from 'react'

const App = () => {
  const [show, setShow] = useState(true)
  return (
    <div>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <LifeCycle />}
    </div>
  )
}

export default App

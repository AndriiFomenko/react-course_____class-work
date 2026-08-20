import { useState } from 'react'

const App = () => {
  const [caption, setCaption] = useState('Click me')

  const handleClick = () => {
    switch (caption) {
      case 'Click me':
        setCaption('First click')
        break
      case 'First click':
        setCaption('Second click')
        break
      case 'Second click':
        setCaption('Third click')
        break
      default:
        setCaption('Click me')
        break
    }
  }

  return (
    <div>
      <h1>Reusable components</h1>

      <button onClick={handleClick}>{caption}</button>
    </div>
  )
}

export default App

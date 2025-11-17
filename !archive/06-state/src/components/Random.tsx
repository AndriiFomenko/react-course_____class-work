import { useState } from 'react'

const randomizer = () => {
  return Math.floor(Math.random() * 100)
}

const Random = () => {
  const [num, setNum] = useState(randomizer()) // State variable 'num' initialized to 0

  const changeNumber = () => {
    setNum(randomizer()) // Update 'num' with a random number between 0 and 99
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={changeNumber}>Generate Random</button>
    </div>
  )
}

export default Random

import { useSelector } from 'react-redux'
import { useAppDispatch } from '../redux/store'
import { selectUsername, setUsername } from '../redux/slices/userSlice'
import { useState } from 'react'

const User = () => {
  const [newUsername, setNewUsername] = useState('')

  const username = useSelector(selectUsername)
  const dispatch = useAppDispatch()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewUsername(e.target.value)
  }

  const handleSetUsername = () => {
    dispatch(setUsername(newUsername))
    setNewUsername('')
  }

  return (
    <div>
      <p>User name from slice: {username}</p>
      <input type="text" value={newUsername} onChange={handleInputChange} />
      <button onClick={handleSetUsername}>Set username</button>
    </div>
  )
}

export default User

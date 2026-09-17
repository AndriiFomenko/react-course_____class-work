import { useSelector } from 'react-redux'
import { useAppDispatch } from '../redux/store'
import {
  selectUsername,
  selectUserIsLoading,
  setUsernameAsync
} from '../redux/slices/userSlice'
import { useState } from 'react'

const User = () => {
  const [newUsername, setNewUsername] = useState('')

  const username = useSelector(selectUsername)
  const isLoading = useSelector(selectUserIsLoading)
  const dispatch = useAppDispatch()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewUsername(e.target.value)
  }

  const handleSetUsername = () => {
    if (!newUsername.trim()) return
    dispatch(setUsernameAsync(newUsername))
    setNewUsername('')
  }

  return (
    <div>
      <p>User name from slice: {username}</p>
      {isLoading && <p>Loading user...</p>}
      <input
        type="text"
        value={newUsername}
        onChange={handleInputChange}
        disabled={isLoading}
      />
      <button onClick={handleSetUsername} disabled={isLoading}>
        Set username
      </button>
    </div>
  )
}

export default User

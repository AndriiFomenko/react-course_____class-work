import { useState } from 'react'

const LoginForm = () => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('123')
  const [usernameError, setUsernameError] = useState<string>('')
  const [passwordError, setPasswordError] = useState<string>('')

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
    setUsernameError('')
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const validateForm = () => {
    let isValid = true

    if (username.trim() === '') {
      setUsernameError('Username is required')
      isValid = false
    } else if (username.length < 3 || username.length > 20) {
      setUsernameError('Username must be between 3 and 20 characters')
      isValid = false
    }

    if (password.trim() === '') {
      setPasswordError('Password is required')
      isValid = false
    } else if (password.length < 6 || password.length > 20) {
      setPasswordError('Password must be between 6 and 20 characters')
      isValid = false
    }

    return isValid
  }

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (validateForm()) {
      console.log('Username:', username)
      console.log('Password:', password)
    } else {
      console.log('Form is invalid')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={handleUsernameChange}
          placeholder="Enter your username"
          autoComplete="username"
        />
        {usernameError && <p className="error">{usernameError}</p>}
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Enter your password"
          autoComplete="current-password"
        />
        {passwordError && <p className="error">{passwordError}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

export default LoginForm

import { useState, type SubmitEvent } from 'react'

const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('123')

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log({ username, password })
  }

  return (
    <form className="col-6 mx-auto" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label" htmlFor="username">
          Username
        </label>
        <input
          type="text"
          className="form-control"
          id="username"
          name="username"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoComplete="off"
        />
      </div>

      <div className="mb-3">
        <label className="form-label" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="off"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Login
      </button>
    </form>
  )
}

export default LoginForm

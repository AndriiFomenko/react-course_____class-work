import { type SubmitEvent, useState } from 'react'

const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log({
      username,
      password
    })
  }

  return (
    <form className="col-6 mx-auto" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label" htmlFor="username">
          Username
        </label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="form-control"
          type="text"
          id="username"
          placeholder="Enter your username"
          autoComplete="off"
        />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="password">
          Password
        </label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
          type="password"
          id="password"
          placeholder="Enter your password"
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

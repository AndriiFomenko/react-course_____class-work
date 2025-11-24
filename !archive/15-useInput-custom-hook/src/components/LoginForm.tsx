import { type FormEvent } from 'react'
import { useInput } from '../hooks/useInput'

const LoginForm = () => {
  const username = useInput('')
  const password = useInput('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log({ username: username.value, password: password.value })
  }

  return (
    <form className="col-6 mx-auto" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          className="form-control"
          type="text"
          id="username"
          placeholder="Enter username"
          name="username"
          {...username}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          className="form-control"
          type="password"
          id="password"
          placeholder="Enter password"
          name="password"
          {...password}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Login
      </button>
    </form>
  )
}

export default LoginForm

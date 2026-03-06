import { type SubmitEvent } from 'react'
import { useInput } from '../hooks/useInput'

const LoginForm = () => {
  const username = useInput('')
  const email = useInput('')
  const password = useInput('')

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log({
      username: username.value,
      email: email.value,
      password: password.value
    })
  }

  return (
    <form className="col-6 mx-auto" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label" htmlFor="username">
          Username
        </label>
        <input
          {...username}
          className="form-control"
          type="text"
          id="username"
          placeholder="Enter your username"
          autoComplete="off"
        />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="email">
          Email
        </label>
        <input
          {...email}
          className="form-control"
          type="email"
          id="email"
          placeholder="Enter your email"
          autoComplete="off"
        />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="password">
          Password
        </label>
        <input
          {...password}
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

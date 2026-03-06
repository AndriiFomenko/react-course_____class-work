import { type SubmitEvent, useRef } from 'react'

const LoginForm = () => {
  const usernameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    const username = usernameRef.current?.value
    const password = passwordRef.current?.value
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
          ref={usernameRef}
          className="form-control"
          type="text"
          id="username"
          placeholder="Enter your username"
        />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="password">
          Password
        </label>
        <input
          ref={passwordRef}
          className="form-control"
          type="password"
          id="password"
          placeholder="Enter your password"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Login
      </button>
    </form>
  )
}

export default LoginForm

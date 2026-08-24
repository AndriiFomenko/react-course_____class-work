import { useRef, type SubmitEvent } from 'react'

const LoginForm = () => {
  const usernameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log({
      username: usernameRef.current?.value,
      password: passwordRef.current?.value
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
          type="text"
          className="form-control"
          id="username"
          placeholder="Enter username"
          value="admin"
        />
      </div>

      <div className="mb-3">
        <label className="form-label" htmlFor="password">
          Password
        </label>
        <input
          ref={passwordRef}
          type="password"
          className="form-control"
          id="password"
          placeholder="Enter password"
          value="12345678"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Login
      </button>
    </form>
  )
}

export default LoginForm

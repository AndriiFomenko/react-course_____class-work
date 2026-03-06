import type { SubmitEvent } from 'react'

const LoginForm = () => {
  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const username = formData.get('username')
    const password = formData.get('password')
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
        <input className="form-control" type="text" id="username" name="username" placeholder="Enter your username" />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="password">
          Password
        </label>
        <input
          className="form-control"
          type="password"
          id="password"
          name="password"
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

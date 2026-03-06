import { type ChangeEvent, type SubmitEvent, useState } from 'react'

interface FormData {
  username: string
  password: string
}

const initialFormData: FormData = {
  username: '',
  password: ''
}

const LoginForm = () => {
  const [formData, setFormData] = useState(initialFormData)

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(formData)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    console.log(name, value)

    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: value
      }
    })

    console.log(formData)
  }

  return (
    <form className="col-6 mx-auto" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label" htmlFor="username">
          Username
        </label>
        <input
          value={formData.username}
          name="username"
          onChange={handleChange}
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
          value={formData.password}
          name="password"
          onChange={handleChange}
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

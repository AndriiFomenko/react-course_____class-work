import { useActionState } from 'react'
import { fakeLogin } from '../utils/api'

interface LoginData {
  username: string
  password: string
}

interface State {
  data: LoginData | null
  error: string | null
}

const LoginForm = () => {
  const [{ data, error }, submitAction] = useActionState<State, FormData>(
    login,
    {
      data: null,
      error: null
    }
  )

  async function login(_prevState: State, formData: FormData) {
    const username = formData.get('username') as string
    const password = formData.get('password') as string

    try {
      const data = await fakeLogin({ username, password })
      console.log(data)
      return {
        data,
        error: null
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        return { data: null, error: error.message }
      } else {
        return { data: null, error: 'An unknown error occurred' }
      }
    }
  }

  return (
    <form action={submitAction}>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          placeholder="Username"
          name="username"
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          name="password"
        />
      </div>
      <button type="submit">Login</button>
      {data && <p>{data.username} logged in successfully</p>}
      {error && <p>{error}</p>}
    </form>
  )
}

export default LoginForm

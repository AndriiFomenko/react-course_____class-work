import { useActionState } from 'react'
import { fakeLogin } from '../utils/fakeLogin'
import Button from './Button'
import type { StateInterface } from '../types/state.interface'

const LoginForm = () => {
  const [{ data, error }, submitAction] = useActionState<StateInterface, FormData>(login, {
    data: null,
    error: null
  })

  async function login(_prevState: StateInterface, formData: FormData) {
    const username = formData.get('username') as string
    const password = formData.get('password') as string

    try {
      const data = await fakeLogin({ username, password })
      console.log(data)
      return { data, error: null }
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
        <input type="text" id="username" autoComplete="off" placeholder="Enter your username" name="username" />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          autoComplete="off"
          placeholder="Enter your password"
          name="password"
          value="123"
        />
      </div>

      <Button />

      {data && <p style={{ color: 'green' }}>{data.username}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  )
}

export default LoginForm

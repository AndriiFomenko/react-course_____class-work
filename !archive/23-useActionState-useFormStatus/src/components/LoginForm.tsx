import { useActionState } from 'react'
import Button from './Button'
import FormInput from './FormInput'
import SuccessMessage from './SuccessMessage'
import ErrorMessage from './ErrorMessage'
import type { LoginState } from '../types/auth'
import { loginAction } from '../actions/loginAction'

const LoginForm = () => {
  const [{ data, error }, submitAction] = useActionState<LoginState, FormData>(loginAction, {
    data: null,
    error: null
  })

  return (
    <form action={submitAction}>
      <FormInput id="username" label="Username" type="text" placeholder="Username" name="username" />
      <FormInput id="password" label="Password" type="password" placeholder="Password" name="password" />
      <Button loadingText="Logging in...">Login</Button>
      {data && <SuccessMessage username={data.username} />}
      {error && <ErrorMessage message={error} />}
    </form>
  )
}

export default LoginForm

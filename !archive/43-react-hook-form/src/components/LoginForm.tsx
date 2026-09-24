import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

interface LoginForm {
  username: string
  password: string
}

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors }
  } = useForm<LoginForm>({
    defaultValues: {
      username: '123',
      password: '123456'
    },
    mode: 'onChange'
  })

  useEffect(() => {
    trigger()
  }, [])

  const onSubmit = (data: LoginForm) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Enter your username"
          autoComplete="username"
          {...register('username', {
            required: 'Username is required',
            minLength: {
              value: 3,
              message: 'Username must be at least 3 characters long'
            },
            maxLength: {
              value: 20,
              message: 'Username must be less than 20 characters long'
            }
          })}
        />
        {errors.username && <p className="error">{errors.username.message}</p>}
        {!errors.username && <p className="success">Username is valid</p>}
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          autoComplete="current-password"
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters long'
            }
          })}
        />
        {errors.password && <p className="error">{errors.password.message}</p>}
        {!errors.password && <p className="success">Password is valid</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

export default LoginForm

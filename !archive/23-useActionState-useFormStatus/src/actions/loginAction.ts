import { fakeLogin } from '../utils/api'
import type { LoginState } from '../types/auth'

export async function loginAction(_prevState: LoginState, formData: FormData): Promise<LoginState> {
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

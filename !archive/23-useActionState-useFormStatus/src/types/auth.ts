export interface LoginData {
  username: string
  password: string
}

export interface LoginState {
  data: LoginData | null
  error: string | null
}

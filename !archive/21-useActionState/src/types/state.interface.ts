import type { LoginDataInterface } from './loginData.interface'

export interface StateInterface {
  data: LoginDataInterface | null
  error: string | null
}

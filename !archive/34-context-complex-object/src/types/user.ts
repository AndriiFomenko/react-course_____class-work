export interface UserState {
  name: string
  isOnline: boolean
  role: 'guest' | 'user' | 'admin'
  setName: (name: string) => void
}

import { createContext } from 'react'

export interface UsernameContextType {
  username: string
  setUsername: (username: string) => void
}

export const UsernameContext = createContext<UsernameContextType>({
  username: 'Гість',
  setUsername: () => {}
})

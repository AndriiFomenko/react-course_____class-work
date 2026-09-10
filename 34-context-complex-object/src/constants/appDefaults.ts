import type { AppContextType } from '../types/app'

export const appContextDefaults: AppContextType = {
  user: {
    name: 'Гість',
    isOnline: false,
    role: 'guest',
    setName: () => {},
  },
  theme: {
    mode: 'dark',
    setMode: () => {},
  },
  lang: {
    code: 'uk',
    setCode: () => {},
  },
}

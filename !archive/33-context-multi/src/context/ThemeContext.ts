import { createContext } from 'react'

export type Theme = 'dark' | 'light'
export type Lang = 'uk' | 'en'

export interface ThemeContextType {
  theme: Theme
  lang: Lang
  setTheme: (theme: Theme) => void
  setLang: (lang: Lang) => void
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
  lang: 'uk',
  setTheme: () => {},
  setLang: () => {},
})

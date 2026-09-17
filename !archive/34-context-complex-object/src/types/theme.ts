export type ThemeMode = 'dark' | 'light'

export interface ThemeState {
  mode: ThemeMode
  setMode: (mode: ThemeMode) => void
}

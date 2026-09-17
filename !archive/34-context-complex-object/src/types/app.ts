import type { UserState } from './user'
import type { ThemeState } from './theme'
import type { LangState } from './lang'

export type { UserState } from './user'
export type { ThemeMode, ThemeState } from './theme'
export type { LangCode, LangState } from './lang'

export interface AppContextType {
  user: UserState
  theme: ThemeState
  lang: LangState
}

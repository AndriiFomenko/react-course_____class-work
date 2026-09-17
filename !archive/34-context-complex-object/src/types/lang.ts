export type LangCode = 'uk' | 'en'

export interface LangState {
  code: LangCode
  setCode: (code: LangCode) => void
}

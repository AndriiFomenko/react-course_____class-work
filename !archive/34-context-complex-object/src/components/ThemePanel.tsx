import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

export default function ThemePanel() {
  const { theme, lang } = useContext(AppContext)

  return (
    <div className="theme-panel">
      <button onClick={() => theme.setMode(theme.mode === 'dark' ? 'light' : 'dark')}>
        {theme.mode === 'dark' ? '☀️ Light' : '🌙 Dark'}
      </button>
      <button onClick={() => lang.setCode(lang.code === 'uk' ? 'en' : 'uk')}>
        {lang.code === 'uk' ? '🇬🇧 EN' : '🇺🇦 UK'}
      </button>
    </div>
  )
}

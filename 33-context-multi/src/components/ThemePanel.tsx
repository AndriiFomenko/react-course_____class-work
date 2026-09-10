import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

export default function ThemePanel() {
  const { theme, lang, setTheme, setLang } = useContext(ThemeContext)

  return (
    <div className="theme-panel">
      <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
      </button>
      <button onClick={() => setLang(lang === 'uk' ? 'en' : 'uk')}>
        {lang === 'uk' ? '🇬🇧 EN' : '🇺🇦 UK'}
      </button>
    </div>
  )
}

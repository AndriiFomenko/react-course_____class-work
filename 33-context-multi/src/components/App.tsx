import { useState } from 'react'
import Section from './Section'
import ThemePanel from './ThemePanel'
import { UsernameContext } from '../context/UsernameContext'
import { ThemeContext, type Theme, type Lang } from '../context/ThemeContext'

export default function App() {
  const [username, setUsername] = useState('Аліса')
  const [theme, setTheme] = useState<Theme>('dark')
  const [lang, setLang] = useState<Lang>('uk')

  return (
    <ThemeContext.Provider value={{ theme, lang, setTheme, setLang }}>
      <UsernameContext.Provider value={{ username, setUsername }}>
        <div className={`app ${theme}`}>
          <h1>{lang === 'uk' ? 'Демо Контексту' : 'Context Demo'}</h1>

          <label>
            {lang === 'uk' ? "Ім'я користувача:" : 'Username:'}{' '}
            <input value={username} onChange={(e) => setUsername(e.target.value)} />
          </label>

          <ThemePanel />
          <Section />
        </div>
      </UsernameContext.Provider>
    </ThemeContext.Provider>
  )
}

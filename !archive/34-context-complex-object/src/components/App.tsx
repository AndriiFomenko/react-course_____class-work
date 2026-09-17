import { useState } from 'react'
import Section from './Section'
import ThemePanel from './ThemePanel'
import { AppContext } from '../context/AppContext'
import type { ThemeMode, LangCode } from '../types/app'

export default function App() {
  const [name, setName] = useState('Аліса')
  const [mode, setMode] = useState<ThemeMode>('dark')
  const [code, setCode] = useState<LangCode>('uk')

  const contextValue = {
    user: { name, isOnline: true, role: 'user' as const, setName },
    theme: { mode, setMode },
    lang: { code, setCode },
  }

  return (
    <AppContext.Provider value={contextValue}>
      <div className={`app ${mode}`}>
        <h1>{code === 'uk' ? 'Демо Контексту' : 'Context Demo'}</h1>

        <label>
          {code === 'uk' ? "Ім'я користувача:" : 'Username:'}{' '}
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </label>

        <ThemePanel />
        <Section />
      </div>
    </AppContext.Provider>
  )
}

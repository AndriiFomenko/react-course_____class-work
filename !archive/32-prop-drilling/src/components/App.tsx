import { useState } from 'react'
import Section from './Section'

// Рівень 1: App — тут живуть дані (username)
export default function App() {
  const [username, setUsername] = useState('Аліса')

  return (
    <div className="app">
      <h1>Prop Drilling Demo</h1>

      <label>
        Ім'я користувача:{' '}
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>

      {/* Передаємо username вниз через prop */}
      <Section username={username} />
    </div>
  )
}

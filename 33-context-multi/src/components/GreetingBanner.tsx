import { useContext } from 'react'
import { UsernameContext } from '../context/UsernameContext'
import { ThemeContext } from '../context/ThemeContext'

export default function GreetingBanner() {
  const { username, setUsername } = useContext(UsernameContext)
  const { lang } = useContext(ThemeContext)

  return (
    <div className="ctx-consumer">
      <p>
        👋 {lang === 'uk' ? 'Привіт' : 'Hello'}, <strong>{username}</strong>!
      </p>
      <button onClick={() => setUsername('Боб')}>
        {lang === 'uk' ? 'Змінити на «Боб»' : 'Change to "Bob"'}
      </button>
    </div>
  )
}

import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

export default function GreetingBanner() {
  const { user, lang } = useContext(AppContext)

  return (
    <div className="ctx-consumer">
      <p>
        👋 {lang.code === 'uk' ? 'Привіт' : 'Hello'}, <strong>{user.name}</strong>!
        {user.isOnline && ' 🟢'}
      </p>
      <button onClick={() => user.setName('Боб')}>
        {lang.code === 'uk' ? 'Змінити на «Боб»' : 'Change to "Bob"'}
      </button>
    </div>
  )
}

import { useContext } from 'react'
import { UsernameContext } from '../context/UsernameContext'

export default function UserBadge() {
  const { username } = useContext(UsernameContext)

  return (
    <div className="level level-4">
      <span className="level-label">Level 4 — UserBadge</span>
      <p className="comment">
        ✅ Читає з контексту через <code>useContext</code>
      </p>
      <div className="badge">👤 {username}</div>
    </div>
  )
}

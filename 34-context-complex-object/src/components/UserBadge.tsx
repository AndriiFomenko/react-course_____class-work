import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

export default function UserBadge() {
  const { user } = useContext(AppContext)

  return (
    <div className="level level-4">
      <span className="level-label">Level 4 — UserBadge</span>
      <p className="comment">
        ✅ Читає з контексту через <code>useContext</code>
      </p>
      <div className="badge">👤 {user.name} ({user.role})</div>
    </div>
  )
}

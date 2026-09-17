import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

export default function UserLabel() {
  const { user } = useContext(AppContext)

  return (
    <p className="ctx-consumer">
      🏷️ {user.name} — {user.role} {user.isOnline ? '🟢' : '⚫'}
    </p>
  )
}

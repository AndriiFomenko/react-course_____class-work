import UserBadge from './UserBadge'
import UserLabel from './UserLabel'

export default function UserCard() {
  return (
    <div className="level level-3">
      <span className="level-label">Level 3 — UserCard</span>
      <p className="comment">Отримав prop, але не використовує його сам.</p>

      <UserLabel />
      <UserBadge />
    </div>
  )
}

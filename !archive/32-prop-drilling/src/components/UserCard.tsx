import UserBadge from './UserBadge'

interface UserCardProps {
  username: string
}

// Рівень 3: UserCard — сам НЕ використовує username,
// але змушений його прийняти і передати далі ↓
export default function UserCard({ username }: UserCardProps) {
  return (
    <div className="level level-3">
      <span className="level-label">Level 3 — UserCard</span>
      <p className="comment">Отримав prop, але не використовує його сам.</p>

      <UserBadge username={username} />
    </div>
  )
}

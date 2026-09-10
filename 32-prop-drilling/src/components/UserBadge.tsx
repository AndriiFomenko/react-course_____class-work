interface UserBadgeProps {
  username: string
}

// Рівень 4: UserBadge — нарешті використовує username!
// Заради цього компонента prop "просвердлив" усі рівні вище
export default function UserBadge({ username }: UserBadgeProps) {
  return (
    <div className="level level-4">
      <span className="level-label">Level 4 — UserBadge</span>
      <p className="comment">✅ Нарешті використовує prop!</p>
      <div className="badge">👤 {username}</div>
    </div>
  )
}

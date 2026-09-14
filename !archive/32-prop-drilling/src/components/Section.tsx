import UserCard from './UserCard'

interface SectionProps {
  username: string
}

// Рівень 2: Section — сам НЕ використовує username,
// але змушений його прийняти і передати далі ↓
export default function Section({ username }: SectionProps) {
  return (
    <div className="level level-2">
      <span className="level-label">Level 2 — Section</span>
      <p className="comment">Отримав prop, але не використовує його сам.</p>

      <UserCard username={username} />
    </div>
  )
}

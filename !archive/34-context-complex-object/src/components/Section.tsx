import UserCard from './UserCard'
import GreetingBanner from './GreetingBanner'

export default function Section() {
  return (
    <div className="level level-2">
      <span className="level-label">Level 2 — Section</span>
      <p className="comment">Отримав prop, але не використовує його сам.</p>

      <GreetingBanner />
      <UserCard />
    </div>
  )
}

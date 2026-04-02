import type { UserInterface } from '../types/user.interface'

interface UserItemProps {
  user: UserInterface
}

const UserItem = ({ user }: UserItemProps) => {
  return (
    <li>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <strong>{user.name}</strong>
        <small style={{ color: 'var(--text-secondary)' }}>{user.email}</small>
      </div>
    </li>
  )
}

export default UserItem

import { use } from 'react'
import type { UserInterface } from '../types/user.interface'

interface UsersListProps {
  promise: Promise<UserInterface[]>
}

const UsersList = ({ promise }: UsersListProps) => {
  const users = use(promise)

  return (
    <div>
      <h1>Список пользователей</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UsersList

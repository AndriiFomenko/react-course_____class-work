import { use } from 'react'
import { fetchData } from '../utils/api'
import type { UserInterface } from '../types/user.interface'

export const UserList = () => {
  const users: UserInterface[] = use(fetchData)
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  )
}

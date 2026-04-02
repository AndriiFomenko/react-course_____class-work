import { use } from 'react'
import type { UserInterface } from '../types/user.interface'
import UserItem from './UserItem'

interface UsersListProps {
  usersPromise: Promise<UserInterface[]>
}

const UsersList = ({ usersPromise }: UsersListProps) => {
  const users = use(usersPromise)
  console.log(users)
  return (
    <ul>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </ul>
  )
}

export default UsersList

import type { UserInterface } from '../types/user.interface'

interface UserListProps {
  users: UserInterface[]
}

const UserList = ({ users }: UserListProps) => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  )
}

export default UserList

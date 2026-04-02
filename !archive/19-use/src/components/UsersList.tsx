import { use } from 'react'
import { usersPromise } from '../utils/api'

const UsersList = () => {
  const users = use(usersPromise)

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  )
}

export default UsersList

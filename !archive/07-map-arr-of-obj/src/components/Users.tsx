import type { UserInterface } from '../types/user.interface'
import { MOCK_USERS_LIST } from '../data/mock-users'
import User from './User'

const users: UserInterface[] = MOCK_USERS_LIST

const Users = () => {
  return (
    <ul className="users-grid">
      {users.map((user: UserInterface) => (
        <User key={user.id} user={user} />
      ))}
    </ul>
  )
}

export default Users

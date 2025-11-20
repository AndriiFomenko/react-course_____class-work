import User from './User'
import { MOCK_USERS } from '../data/mock-users'
import type { UserInterface } from '../types/user.interface'

const users: UserInterface[] = MOCK_USERS

const Users = () => {
  return (
    <div>
      {users.map((user) => (
        <User key={user.id} {...user} />
      ))}
    </div>
  )
}

export default Users

import { MOCK_USERS } from '../data/mock-users'
import type { UserInterface } from '../types/user.interface'
import User from './User'

const users: UserInterface[] = MOCK_USERS

const Users = () => {
  return (
    <>
      <h1>Users list</h1>
      {users.map((user: UserInterface) => {
        return <User key={user.id} {...user} />
      })}
    </>
  )
}

export default Users

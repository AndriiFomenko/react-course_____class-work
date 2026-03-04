import { MOCK_USERS } from './data/mock-users'
import type { UserInterface } from './types/user.interface'

const users: UserInterface[] = MOCK_USERS
console.log(users)

const App = () => {
  return (
    <div>
      <h1>Users list</h1>
      {users.map((user: UserInterface) => {
        console.log(user)
        return (
          <div key={user.id}>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Username: {user.username}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
          </div>
        )
      })}
    </div>
  )
}

export default App

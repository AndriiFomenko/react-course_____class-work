import { use } from 'react'
import { usersPromise } from '../services/api'

const App = () => {
  const users = use(usersPromise)

  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App

import { useEffect, useState } from 'react'

interface User {
  id: number
  name: string
  email: string
  username: string
}

const App = () => {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => {
        setUsers(users)
      })
  }, [])

  if (users.length === 0) {
    return <h1>Something went wrong</h1>
  }

  console.log('App rendered')
  console.log(users)

  return (
    <div>
      <h1>Users list</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App

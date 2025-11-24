import { useEffect, useState } from 'react'
import type { UserInterface } from './types/user.interface'
import { fetchData } from './utils/api'

const App = () => {
  const [users, setUsers] = useState<UserInterface[]>([])
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    ;(async () => {
      try {
        setIsLoading(true)
        setError(null)
        const data = await fetchData()
        setUsers(data)
      } catch (error) {
        setError((error as Error).message)
      } finally {
        setIsLoading(false)
      }
    })()
  }, [])

  console.log(users)

  return (
    <div>
      <h1>Users List</h1>
      {isLoading && <p style={{ color: 'blue', fontSize: '1.2em', fontWeight: 'bold' }}>Завантаження...</p>}
      {error && <p style={{ color: 'red', fontSize: '1.2em', fontWeight: 'bold' }}>{error}</p>}
      {!isLoading && !error && users.length > 0 && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default App

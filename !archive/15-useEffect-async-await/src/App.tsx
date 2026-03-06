import { useEffect, useState } from 'react'
import type { UserInterface } from './types/user.interface'

const fetchData = async () => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    const data = await fetch('https://jsonplaceholder.typicode.com/user1s')
      .then((res) => {
        if (res.status !== 200) {
          throw new Error(`Status code ${res.status}`)
        }
        return res.json()
      })
      .then((data) => data)

    return data
  } catch (error: unknown) {
    throw new Error(`Error fetching data: ${(error as Error).message}`)
  }
}

const App = () => {
  const [users, setUsers] = useState<UserInterface[]>([])
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    const fetchDataAndHandleLoading = async () => {
      try {
        setIsLoading(true)
        const data = await fetchData()
        setUsers(data)
      } catch (error) {
        setError((error as Error).message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchDataAndHandleLoading()
  }, [])

  console.log(users)

  return (
    <div>
      <h1>Users list</h1>
      {isLoading && <p style={{ fontSize: '40px', fontWeight: 'bold' }}>Loading...</p>}
      {error && <p style={{ fontSize: '40px', fontWeight: 'bold', color: 'red' }}>{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App

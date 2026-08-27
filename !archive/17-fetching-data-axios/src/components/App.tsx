import { useEffect, useState } from 'react'
import { fetchData } from '../api/api'
import type { UserInterface } from '../types/user.interface'

const App = () => {
  const [users, setUsers] = useState<UserInterface[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isError, setIsError] = useState<string | null>(null)

  useEffect(() => {
    const fetchDataAndHandleLoading = async () => {
      try {
        setIsLoading(true)
        setIsError(null)

        const data = await fetchData()

        setUsers(data)
      } catch (error) {
        setIsError(error.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchDataAndHandleLoading()
  }, [])

  if (isError) {
    return (
      <div>
        <h1>Something went wrong</h1>
        <h2>{isError}</h2>
      </div>
    )
  }

  if (isLoading) {
    return <h1>Loading...</h1>
  }

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

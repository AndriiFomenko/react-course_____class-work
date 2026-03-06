import { useEffect, useState } from 'react'
import type { UserInterface } from './types/user.interface'
import { fetchData } from './api/api'
import Loader from './components/Loader'
import ErrorMessage from './components/ErrorMessage'
import UserList from './components/UserList'

const App = () => {
  const [users, setUsers] = useState<UserInterface[]>([])
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    ;(async () => {
      try {
        setIsLoading(true)
        setUsers(await fetchData())
      } catch (error) {
        setError((error as Error).message)
      } finally {
        setIsLoading(false)
      }
    })()
  }, [])

  return (
    <div>
      <h1>Users list</h1>
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      <UserList users={users} />
    </div>
  )
}

export default App

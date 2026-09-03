import { Suspense } from 'react'
import UsersList from './UsersList'
import Loader from './Loader'
import { useState } from 'react'
import { fetchUsers } from '../api/api'
import type { UserInterface } from '../types/user.interface'
import AppErrorBoundary from './AppErrorBoundary'

const Root = () => {
  const [usersPromise, setUsersPromise] = useState<Promise<UserInterface[]>>(() => fetchUsers(false))

  const handleSimulateError = () => {
    setUsersPromise(fetchUsers(true))
  }

  const handleRetry = () => {
    setUsersPromise(fetchUsers(false))
  }

  return (
    <AppErrorBoundary onReset={handleRetry}>
      <Suspense fallback={<Loader />}>
        <UsersList promise={usersPromise} />
        <button onClick={handleSimulateError}>Simulate Error</button>
      </Suspense>
    </AppErrorBoundary>
  )
}

export default Root

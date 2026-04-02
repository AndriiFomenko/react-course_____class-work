import { Suspense, useState } from 'react'
import Loading from './Loading'
import App from './App'
import AppErrorBoundary from './AppErrorBoundary'
import { fetchUsers } from '../services/api'
import type { UserInterface } from '../types/user.interface'

const Root = () => {
  const [usersPromise, setUsersPromise] = useState<Promise<UserInterface[]>>(() => fetchUsers(false))

  const handleSimulateError = () => {
    setUsersPromise(() => fetchUsers(true))
  }

  const handleReset = () => {
    setUsersPromise(() => fetchUsers(false))
  }

  return (
    <AppErrorBoundary onReset={handleReset}>
      <Suspense fallback={<Loading />}>
        <App usersPromise={usersPromise} onSimulateError={handleSimulateError} />
      </Suspense>
    </AppErrorBoundary>
  )
}

export default Root

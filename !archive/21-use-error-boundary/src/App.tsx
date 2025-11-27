import { Suspense } from 'react'
import { UserList } from './components/UserList'
import AppErrorBoudary from './components/AppErrorBoudary'
import LoadingFallback from './components/LoadingFallback'

const App = () => {
  return (
    <div>
      <h1>Users List</h1>
      <AppErrorBoudary>
        <Suspense fallback={<LoadingFallback />}>
          <UserList />
        </Suspense>
      </AppErrorBoudary>
    </div>
  )
}

export default App

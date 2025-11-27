import { Suspense } from 'react'
import { UserList } from './components/UserList'
import { LoadingFallback } from './components/LoadingFallback'

const App = () => {
  return (
    <div>
      <h1>Users List</h1>
      <Suspense fallback={<LoadingFallback />}>
        <UserList />
      </Suspense>
    </div>
  )
}

export default App

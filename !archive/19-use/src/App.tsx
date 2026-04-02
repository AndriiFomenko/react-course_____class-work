import { Suspense } from 'react'
import UsersList from './components/UsersList'

const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <UsersList />
      </Suspense>
    </div>
  )
}

export default App

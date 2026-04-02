import UsersList from './UsersList'
import type { UserInterface } from '../types/user.interface'

interface AppProps {
  onSimulateError: () => void
  usersPromise: Promise<UserInterface[]>
}

const App = ({ onSimulateError, usersPromise }: AppProps) => {
  return (
    <div>
      <h1>Users List</h1>
      <button className="error-button" style={{ marginBottom: '32px' }} onClick={onSimulateError}>
        💣 Simulate Error
      </button>
      <UsersList usersPromise={usersPromise} />
    </div>
  )
}

export default App

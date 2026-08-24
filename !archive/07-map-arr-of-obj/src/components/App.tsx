import Users from './Users'

const App = () => {
  return (
    <div className="app-container">
      <header className="app-header">
        <div className="header-badge">
          <span className="header-badge-dot" />
          <span>Active Team & User Directory</span>
        </div>
        <h1 className="app-title">My Awesome Users List</h1>
        <p className="app-subtitle">
          A showcase of team members and profiles rendered dynamically with structured details, contacts, and corporate roles.
        </p>
      </header>

      <Users />
    </div>
  )
}

export default App

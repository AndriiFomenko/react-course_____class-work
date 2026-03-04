import { Fragment } from 'react'

const App = () => {
  const users = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 }
  ]

  return (
    <>
      <h1>Users List</h1>
      {users.map((user) => (
        // ! Спроба додати key до скороченого фрагмента <> призведе до помилки компіляції
        // < key={user.id}>
        <Fragment key={user.id}>
          <h2>{user.name}</h2>
          <p>Age: {user.age}</p>
        </Fragment>
      ))}
    </>
  )
}

export default App

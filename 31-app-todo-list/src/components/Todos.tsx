import Todo from './Todo'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Todos = () => {
  const { todos, isLoading } = useContext(AppContext)

  if (isLoading) {
    return <p>Loading tasks...</p>
  }

  if (!todos.length) {
    return <h2>Todo list is empty</h2>
  }

  return todos.map((todo) => <Todo key={todo.id} todo={todo} />)
}

export default Todos

import { useContext } from 'react'
import { Context } from '../context/context'
import Todo from './Todo'

const Todos = () => {
  const { todos, completedTodosCount } = useContext(Context)

  return (
    <div className="todos">
      {todos.length === 0 ? (
        <p className="todos__empty">No todos found</p>
      ) : (
        [...todos]
          .sort((a, b) => Number(a.completed) - Number(b.completed))
          .map((todo) => <Todo key={todo.id} todo={todo} />)
      )}
      {completedTodosCount > 0 && (
        <p className="todos__message">
          You have completed {completedTodosCount}{' '}
          {completedTodosCount === 1 ? 'todo' : 'todos'}
        </p>
      )}
    </div>
  )
}

export default Todos

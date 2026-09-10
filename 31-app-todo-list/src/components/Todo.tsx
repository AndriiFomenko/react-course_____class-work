import type { TodoInterface } from '../types/todo.interface'
import { RiDeleteBin2Line, RiCheckLine } from 'react-icons/ri'

interface TodoProps {
  todo: TodoInterface
  deleteTodoHandler: (id: string) => void
  toggleTodoHandler: (id: string) => void
}

const Todo = ({ todo: { id, title, completed, createdAt }, deleteTodoHandler, toggleTodoHandler }: TodoProps) => {
  const formattedDate = new Date(createdAt).toLocaleString('uk-UA', {
    day: '2-digit',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit'
  })

  return (
    <div className={completed ? 'completed' : ''}>
      <h2>
        <small title={id}>{id}</small>
        <span>{title}</span>
        <time dateTime={createdAt}>{formattedDate}</time>
      </h2>
      <p>{completed ? 'Completed' : 'Not completed'}</p>
      <button
        type="button"
        className="delete-btn"
        onClick={() => deleteTodoHandler(id)}
        title="Delete todo"
      >
        <RiDeleteBin2Line />
      </button>
      <button
        type="button"
        className={`check-btn ${completed ? 'completed' : ''}`}
        onClick={() => toggleTodoHandler(id)}
        title={completed ? 'Mark as not completed' : 'Mark as completed'}
      >
        <RiCheckLine />
      </button>
    </div>
  )
}

export default Todo

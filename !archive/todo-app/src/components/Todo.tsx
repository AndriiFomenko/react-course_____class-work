import { useContext } from 'react'
import { RiDeleteBin2Fill, RiTodoFill } from 'react-icons/ri'
import { FaCheck } from 'react-icons/fa'
import { type TodoInterface } from '../types/todo.interface'
import { Context } from '../context/context'

interface TodoProps {
  todo: TodoInterface
}

const Todo = ({ todo: { id, title, completed } }: TodoProps) => {
  const { deleteTodo, toggleTodo } = useContext(Context)

  return (
    <div className={`todo${completed ? ' todo--completed' : ''}`}>
      <div className="todo__id">{id}</div>
      <RiTodoFill className="todo__icon" />
      <h2 className="todo__title">{title}</h2>
      <div className="todo__completed">
        {completed ? 'Completed' : 'Not Completed'}
      </div>
      <RiDeleteBin2Fill
        className="todo__delete-btn"
        onClick={() => deleteTodo(id)}
      />
      <FaCheck className="todo__check-btn" onClick={() => toggleTodo(id)} />
    </div>
  )
}

export default Todo

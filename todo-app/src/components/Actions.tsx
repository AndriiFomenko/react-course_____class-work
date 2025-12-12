import Button from './Button'
import { RiCheckboxCircleLine, RiDeleteBin5Fill } from 'react-icons/ri'
import { useContext } from 'react'
import { Context } from '../context/context'

const Actions = () => {
  const { todos, deleteAllTodos, clearCompletedTodos, completedTodosCount } =
    useContext(Context)
  const isDisabled = completedTodosCount === 0

  if (todos.length === 0) return null

  return (
    <div className="todos__actions">
      <Button onClick={deleteAllTodos} title="Delete All Todos">
        <RiDeleteBin5Fill />
      </Button>
      <Button
        onClick={clearCompletedTodos}
        title="Clear Completed Todos"
        disabled={isDisabled}
      >
        <RiCheckboxCircleLine />
      </Button>
    </div>
  )
}

export default Actions

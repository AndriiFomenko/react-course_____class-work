import Todo from './Todo'
import type { TodoInterface } from '../types/todo.interface'

interface TodosProps {
  todos: TodoInterface[]
  deleteTodoHandler: (id: string) => void
  toggleTodoHandler: (id: string) => void
}

const Todos = ({ todos, deleteTodoHandler, toggleTodoHandler }: TodosProps) => {
  return todos.map((todo) => (
    <Todo key={todo.id} todo={todo} deleteTodoHandler={deleteTodoHandler} toggleTodoHandler={toggleTodoHandler} />
  ))
}

export default Todos

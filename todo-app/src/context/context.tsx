import { createContext } from 'react'
import type { TodoInterface } from '../types/todo.interface'

interface ContextInterface {
  todos: TodoInterface[]
  completedTodosCount: number
  addTodo: (todo: TodoInterface) => void
  deleteTodo: (id: string) => void
  deleteAllTodos: () => void
  clearCompletedTodos: () => void
  toggleTodo: (id: string) => void
}

const initialState: ContextInterface = {
  todos: [],
  completedTodosCount: 0,
  addTodo: () => {},
  deleteTodo: () => {},
  deleteAllTodos: () => {},
  clearCompletedTodos: () => {},
  toggleTodo: () => {}
}

export const Context = createContext<ContextInterface>(initialState)

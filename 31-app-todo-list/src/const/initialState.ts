import type { TodoInterface } from '../types/todo.interface'

export interface AppContextType {
  todos: TodoInterface[]
  isLoading: boolean
  addTodoHandler: (title: string) => void
  deleteTodoHandler: (id: string) => void
  toggleTodoHandler: (id: string) => void
  clearAllCompletedTodosHandler: () => void
  restoreTodosHandler: () => void
}

export const initialState: AppContextType = {
  todos: [],
  isLoading: true,
  addTodoHandler: () => {},
  deleteTodoHandler: () => {},
  toggleTodoHandler: () => {},
  clearAllCompletedTodosHandler: () => {},
  restoreTodosHandler: () => {}
}

import type { TodoInterface } from '../types/todo.interface'

export interface AppContextType {
  todos: TodoInterface[]
  isLoading: boolean
  isModalOpen: boolean
  editingTodo: TodoInterface | null
  openAddModal: () => void
  openEditModal: (todo: TodoInterface) => void
  closeModal: () => void
  addTodoHandler: (title: string) => void
  updateTodoHandler: (id: string, title: string) => void
  deleteTodoHandler: (id: string) => void
  toggleTodoHandler: (id: string) => void
  clearAllCompletedTodosHandler: () => void
  restoreTodosHandler: () => void
}

export const initialState: AppContextType = {
  todos: [],
  isLoading: true,
  isModalOpen: false,
  editingTodo: null,
  openAddModal: () => {},
  openEditModal: () => {},
  closeModal: () => {},
  addTodoHandler: () => {},
  updateTodoHandler: () => {},
  deleteTodoHandler: () => {},
  toggleTodoHandler: () => {},
  clearAllCompletedTodosHandler: () => {},
  restoreTodosHandler: () => {}
}

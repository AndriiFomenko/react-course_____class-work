import { useState, type ReactNode } from 'react'
import type { TodoInterface } from '../types/todo.interface'
import { MOCK_TODOS } from '../data/mock-todos'
import { Context } from '../context/context'

interface ProviderProps {
  children: ReactNode
}

const Provider = ({ children }: ProviderProps) => {
  const [todos, setTodos] = useState<TodoInterface[]>(MOCK_TODOS)

  const addTodo = (todo: TodoInterface) => {
    setTodos([...todos, todo])
    console.log(todo)
  }

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const deleteAllTodos = () => {
    setTodos([])
  }

  const clearCompletedTodos = () => {
    setTodos(todos.filter((todo) => !todo.completed))
  }

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const completedTodosCount: number = todos.filter(
    (todo) => todo.completed
  ).length

  return (
    <Context.Provider
      value={{
        todos,
        completedTodosCount,
        addTodo,
        deleteTodo,
        deleteAllTodos,
        clearCompletedTodos,
        toggleTodo
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Provider

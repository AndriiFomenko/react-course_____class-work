import { useState, useEffect, type ReactNode } from 'react'
import { AppContext } from '../context/AppContext'
import type { TodoInterface } from '../types/todo.interface'
import { getTodos, saveTodos, restoreTodos } from '../api/api'
import { v4 as uuid } from 'uuid'

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<TodoInterface[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    getTodos()
      .then((data) => {
        setTodos(data)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  const addTodoHandler = async (title: string) => {
    const newTodo: TodoInterface = {
      id: uuid(),
      title,
      completed: false,
      createdAt: new Date().toISOString()
    }
    const updatedTodos = [...todos, newTodo]
    setTodos(updatedTodos)
    await saveTodos(updatedTodos)
  }

  const deleteTodoHandler = async (id: string) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id)
    setTodos(updatedTodos)
    await saveTodos(updatedTodos)
  }

  const clearAllCompletedTodosHandler = async () => {
    const updatedTodos = todos.filter((todo) => !todo.completed)
    setTodos(updatedTodos)
    await saveTodos(updatedTodos)
  }

  const toggleTodoHandler = async (id: string) => {
    const updatedTodos = todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    setTodos(updatedTodos)
    await saveTodos(updatedTodos)
  }

  const restoreTodosHandler = async () => {
    setIsLoading(true)
    try {
      const restored = await restoreTodos()
      setTodos(restored)
    } finally {
      setIsLoading(false)
    }
  }

  const sortedTodos = [...todos].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())

  return (
    <AppContext.Provider
      value={{
        todos: sortedTodos,
        isLoading,
        addTodoHandler,
        deleteTodoHandler,
        clearAllCompletedTodosHandler,
        toggleTodoHandler,
        restoreTodosHandler
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default ContextProvider

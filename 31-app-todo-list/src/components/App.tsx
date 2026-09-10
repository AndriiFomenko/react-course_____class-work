import Form from './Form'
import Todos from './Todos'
import { useState, useEffect } from 'react'
import type { TodoInterface } from '../types/todo.interface'
import { getTodos, saveTodos, restoreTodos } from '../api/api'
import { v4 as uuid } from 'uuid'
import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri'

const App = () => {
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
    <div>
      <h1>ToDo List</h1>
      <Form addTodoHandler={addTodoHandler} />
      <nav>
        <button type="button" onClick={restoreTodosHandler} title="Restore default todos">
          <RiRefreshLine /> Restore
        </button>
        <button type="button" onClick={clearAllCompletedTodosHandler} title="Clear all completed todos">
          <RiDeleteBin2Line /> Clear completed
        </button>
      </nav>
      {isLoading ? (
        <p>Loading tasks...</p>
      ) : !todos.length ? (
        <h2>Todo list is empty</h2>
      ) : (
        <Todos todos={sortedTodos} deleteTodoHandler={deleteTodoHandler} toggleTodoHandler={toggleTodoHandler} />
      )}
    </div>
  )
}

export default App

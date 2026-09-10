import type { TodoInterface } from '../types/todo.interface'

const API_URL = '/api/todos'
const DELAY_MS = 1000

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const getTodos = async (): Promise<TodoInterface[]> => {
  const [response] = await Promise.all([fetch(API_URL), delay(DELAY_MS)])
  if (!response.ok) {
    throw new Error(`Failed to load todos from disk: ${response.status}`)
  }
  return response.json()
}

export const saveTodos = async (todos: TodoInterface[]): Promise<void> => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(todos, null, 2)
  })
  if (!response.ok) {
    throw new Error(`Failed to save todos to disk: ${response.status}`)
  }
}

export const restoreTodos = async (): Promise<TodoInterface[]> => {
  const [response] = await Promise.all([
    fetch(`${API_URL}/restore`, {
      method: 'POST'
    }),
    delay(DELAY_MS)
  ])
  if (!response.ok) {
    throw new Error(`Failed to restore todos on disk: ${response.status}`)
  }
  return response.json()
}

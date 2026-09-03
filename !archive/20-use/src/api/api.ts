import type { UserInterface } from '../types/user.interface'

const API_URL = 'https://jsonplaceholder.typicode.com'
const API_USERS_ENDPOINT_VALID = `${API_URL}/users`
const API_USERS_ENDPOINT_INVALID = `${API_URL}/invalid/`

const DELAY = 2000
const OPTIONS = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'User-Agent': 'ReactCourse'
  }
}

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms))

export const fetchUsers = async (simulateError = false): Promise<UserInterface[]> => {
  const [response] = await Promise.all([
    fetch(simulateError ? API_USERS_ENDPOINT_INVALID : API_USERS_ENDPOINT_VALID, OPTIONS),
    delay(DELAY)
  ])

  if (!response.ok) {
    throw new Error('Failed to fetch users')
  }

  return response.json()
}

import type { UserInterface } from '../types/user.interface'

const API_URL_VALID = 'https://jsonplaceholder.typicode.com/users'
const API_URL_INVALID = 'https://jsonplaceholder.typicode.com/users-invalid'

const OPTIONS = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
}

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const fetchUsers = async (simulateError: boolean = false): Promise<UserInterface[]> => {
  const URL = simulateError ? API_URL_INVALID : API_URL_VALID
  const [response] = await Promise.all([await fetch(URL, OPTIONS), await delay(2000)])

  if (!response.ok) {
    throw new Error('Failed to fetch users')
  }

  return response.json()
}

import type { UserInterface } from '../types/user.interface'

const API_URL = 'https://jsonplaceholder.typicode.com/users'

const OPTIONS = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
}

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const usersPromise: Promise<UserInterface[]> = (async () => {
  const [response] = await Promise.all([await fetch(API_URL, OPTIONS), await delay(2000)])

  if (!response.ok) {
    throw new Error('Failed to fetch users')
  }

  return response.json()
})()

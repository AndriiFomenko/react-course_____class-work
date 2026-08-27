import type { UserInterface } from '../types/user.interface'

const API_URL = 'https://jsonplaceholder.typicode.com/users1'

export const fetchData = async (): Promise<UserInterface[]> => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 2000))

    const response = await fetch(API_URL)

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    return response.json()
  } catch (error) {
    throw new Error('Error fetching data from API', { cause: error })
  }
}

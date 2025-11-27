import axios from 'axios'
import type { UserInterface } from '../types/user.interface'

const API_URL = 'https://jsonplaceholder.typicode.com/users'

export const fetchData: Promise<UserInterface[]> = axios
  .get<UserInterface[]>(API_URL)
  .then((response) => new Promise<UserInterface[]>((resolve) => setTimeout(() => resolve(response.data), 1000)))
  .catch((error) => {
    if (axios.isAxiosError(error)) {
      throw new Error(`Error fetching data: ${error.response?.data}`)
    }
    throw new Error('An unknown error occurred')
  })

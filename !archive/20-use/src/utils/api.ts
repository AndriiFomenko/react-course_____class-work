import axios, { AxiosError } from 'axios'
import type { UserInterface } from '../types/user.interface'

const API_URL = 'https://jsonplaceholder.typicode.com/userss'

const MOCK_ERROR = {
  id: 1,
  name: 'Error loading data',
  username: 'error',
  email: 'error@example.com'
}

export const fetchData: Promise<UserInterface[]> = axios
  .get<UserInterface[]>(API_URL)
  .then((response) => new Promise<UserInterface[]>((resolve) => setTimeout(() => resolve(response.data), 1000)))
  .catch(() => [MOCK_ERROR])

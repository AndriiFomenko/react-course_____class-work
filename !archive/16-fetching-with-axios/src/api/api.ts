import axios, { type AxiosError } from 'axios'

const API_URL = 'https://jsonplaceholder.typicode.com/users'

export const fetchData = async () => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    return (await axios.get(API_URL)).data
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Error fetching data: ${(error as AxiosError).message}`)
    }
    throw new Error('Unknown error occured')
  }
}

import type { UserInterface } from '../types/user.interface'

export const usersPromise: Promise<UserInterface[]> = fetch('https://jsonplaceholder.typicode.com/users')
  .then((res) => {
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`)
    }
    return res.json()
  })
  .catch((err) => {
    console.error(err)
    return []
  })

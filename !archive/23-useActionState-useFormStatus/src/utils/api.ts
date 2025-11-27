interface LoginData {
  username: string
  password: string
}

export const fakeLogin = async ({ username, password }: LoginData): Promise<LoginData> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!username.trim() || !password.trim()) {
        reject(new Error('Username and password are required'))
      } else {
        resolve({ username, password })
      }
    }, 2000)
  })
}

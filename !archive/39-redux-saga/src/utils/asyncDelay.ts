export const asyncDelay = <T>(value: T, delayMs: number = 1000): Promise<T> => {
  return new Promise<T>((resolve) => {
    setTimeout(() => {
      resolve(value)
    }, delayMs)
  })
}

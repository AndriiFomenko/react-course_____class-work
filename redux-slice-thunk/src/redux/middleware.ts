import { type Middleware } from '@reduxjs/toolkit'

export const logger: Middleware = (store) => (next) => (action: any) => {
  const prevState = store.getState().counter.count
  const result = next(action)
  const nextState = store.getState().counter.count

  console.log(`
    prevState: ${prevState}
      action: ${JSON.stringify(action.type)}
        nextState: ${nextState}`)

  return result
}

import {
  type MiddlewareAPI,
  type Dispatch,
  type UnknownAction
} from '@reduxjs/toolkit'
import type { RootState } from './types'

export const logger =
  (store: MiddlewareAPI<Dispatch, RootState>) =>
  (next: Dispatch) =>
  (action: UnknownAction) => {
    const prevState = store.getState().counter.count
    const result = next(action)
    const nextState = store.getState().counter.count

    console.log(`
    prevState: ${prevState}
      action: ${JSON.stringify(action.type)}
        nextState: ${nextState}`)

    return result
  }

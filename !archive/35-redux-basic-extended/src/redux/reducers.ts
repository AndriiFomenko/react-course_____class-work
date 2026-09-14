import { INCREMENT, DECREMENT } from './actionTypes'
import type { CounterAction } from './types'

const initialState = 0

export const counterReducer = (state: number = initialState, action: CounterAction) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1
    case DECREMENT:
      return state - 1
    default:
      return state
  }
}

export default counterReducer

import { ActionTypes } from './actionTypes'
import type { CounterState } from './types'
import type { Action } from '@reduxjs/toolkit'

const initialState: CounterState = { count: 0 }

export const counterReducer = (state: CounterState = initialState, action: Action): CounterState => {
  switch (action.type) {
    case ActionTypes.INCREMENT:
      return { count: state.count + 1 }
    case ActionTypes.DECREMENT:
      return { count: state.count - 1 }
    default:
      return state
  }
}

export default counterReducer

import type { Action } from '@reduxjs/toolkit'
import type { CounterState } from './types'
import { ActionTypes } from './actionTypes'

const initialState: CounterState = {
  count: 0
}

const counterReducer = (state = initialState, action: Action): CounterState => {
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

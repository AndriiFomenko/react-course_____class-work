import { ActionTypes } from './actionTypes'
import type { AsyncCounterAction } from './types'

export const incrementAsync = (): AsyncCounterAction => (dispatch) => {
  setTimeout(() => {
    dispatch({ type: ActionTypes.INCREMENT })
  }, 1000)
}
export const decrementAsync = (): AsyncCounterAction => (dispatch) => {
  setTimeout(() => {
    dispatch({ type: ActionTypes.DECREMENT })
  }, 1000)
}

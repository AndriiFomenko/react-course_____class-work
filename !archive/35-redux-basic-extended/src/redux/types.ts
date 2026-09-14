import type { UnknownAction } from '@reduxjs/toolkit'
import { INCREMENT, DECREMENT } from './actionTypes'

export interface IncrementAction extends UnknownAction {
  type: typeof INCREMENT
}

export interface DecrementAction extends UnknownAction {
  type: typeof DECREMENT
}

export type CounterAction = IncrementAction | DecrementAction | UnknownAction

export interface RootState {
  counter: number
}

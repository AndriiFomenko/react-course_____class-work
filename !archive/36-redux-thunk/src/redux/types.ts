import type { ThunkAction, Action } from '@reduxjs/toolkit'
import type counterReducer from './reducers'

export type CounterState = {
  count: number
}

export type RootState = {
  counter: ReturnType<typeof counterReducer>
}

export type AsyncCounterAction = ThunkAction<void, RootState, unknown, Action>

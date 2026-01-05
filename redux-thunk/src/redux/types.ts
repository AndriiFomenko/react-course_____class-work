import {
  type Action,
  type ThunkAction,
  type ThunkDispatch
} from '@reduxjs/toolkit'
import type counterReducer from './reducer'

export type CounterState = {
  count: number
}

export type RootState = {
  counter: ReturnType<typeof counterReducer>
}

export type AsyncCounterAction = ThunkAction<void, RootState, unknown, Action>

export type AppDispatch = ThunkDispatch<RootState, unknown, Action>

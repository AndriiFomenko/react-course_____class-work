import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

export interface CounterState {
  count: number
  isLoading: boolean
}

const initialState: CounterState = {
  count: 0,
  isLoading: false
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // синхронні дії
    increment: (state: CounterState, action: PayloadAction<number>) => {
      state.count += action.payload
    },
    decrement: (state: CounterState, action: PayloadAction<number>) => {
      state.count -= action.payload
    },
    // тригери для саги
    incrementAsync: () => {},
    decrementAsync: () => {},
    // лайфсайкли саги
    incrementPending: (state: CounterState) => {
      state.isLoading = true
    },
    incrementFullfilled: (state: CounterState, action: PayloadAction<number>) => {
      state.count += action.payload
      state.isLoading = false
    },
    decrementPending: (state: CounterState) => {
      state.isLoading = true
    },
    decrementFullfilled: (state: CounterState, action: PayloadAction<number>) => {
      state.count -= action.payload
      state.isLoading = false
    }
  }
})

export const {
  increment,
  decrement,
  incrementAsync,
  decrementAsync,
  incrementFullfilled,
  decrementFullfilled,
  incrementPending,
  decrementPending
} = counterSlice.actions

export const selectCounter = (state: RootState) => state.counter.count
export const selectIsLoading = (state: RootState) => state.counter.isLoading

export default counterSlice.reducer

import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'

export interface CounterState {
  count: number
}

const initialState: CounterState = {
  count: 0
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    },
    reset: (state) => {
      state.count = 0
    }
  }
})

export const { increment, decrement, reset } = counterSlice.actions
export const selectCounter = (state: RootState) => state.counter.count
export default counterSlice.reducer

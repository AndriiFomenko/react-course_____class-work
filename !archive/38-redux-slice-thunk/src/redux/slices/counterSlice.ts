import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { asyncDelay } from '../../utils/asyncDelay'

export interface CounterState {
  count: number
  isLoading: boolean
  error: string | null
}

const initialState: CounterState = {
  count: 0,
  isLoading: false,
  error: null
}

export const incrementAsync = createAsyncThunk('counter/incrementAsync', async () => asyncDelay(1))
export const decrementAsync = createAsyncThunk('counter/decrementAsync', async () => asyncDelay(-1))

export const triggerRejectAsync = createAsyncThunk<void, void, { rejectValue: string }>(
  'counter/triggerRejectAsync',
  async (_, { rejectWithValue }) => {
    await new Promise((resolve) => setTimeout(resolve, 1500))
    return rejectWithValue('Operation failed: Rejected!')
  }
)

const handlePending = (state: CounterState) => {
  state.isLoading = true
  state.error = null
}

const handleFulfilled = (state: CounterState, action: { payload: number }) => {
  state.count += action.payload
  state.isLoading = false
  state.error = null
}

const handleRejected = (state: CounterState, action: { payload?: unknown; error?: { message?: string } }) => {
  state.isLoading = false
  state.error = (action.payload as string) || action.error?.message || 'Operation failed'
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    reset: (state) => {
      state.count = 0
      state.isLoading = false
      state.error = null
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.fulfilled, handleFulfilled)
      .addCase(incrementAsync.pending, handlePending)
      .addCase(incrementAsync.rejected, handleRejected)
      .addCase(decrementAsync.fulfilled, handleFulfilled)
      .addCase(decrementAsync.pending, handlePending)
      .addCase(decrementAsync.rejected, handleRejected)
      .addCase(triggerRejectAsync.pending, handlePending)
      .addCase(triggerRejectAsync.rejected, handleRejected)
  }
})

export const { reset } = counterSlice.actions

export const selectCounter = (state: RootState) => state.counter.count
export const selectIsLoading = (state: RootState) => state.counter.isLoading
export const selectError = (state: RootState) => state.counter.error

export default counterSlice.reducer

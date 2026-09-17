import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { asyncDelay } from '../../utils/asyncDelay'

export interface UserState {
  name: string
  isLoading: boolean
}

const initialState: UserState = {
  name: 'John Doe',
  isLoading: false
}

export const setUsernameAsync = createAsyncThunk('user/setUsernameAsync', async (name: string) => asyncDelay(name))

const handlePending = (state: UserState) => {
  state.isLoading = true
}

const handleFulfilled = (state: UserState, action: PayloadAction<string>) => {
  state.name = action.payload
  state.isLoading = false
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(setUsernameAsync.pending, handlePending).addCase(setUsernameAsync.fulfilled, handleFulfilled)
  }
})

export const { setUsername } = userSlice.actions

export const selectUsername = (state: RootState) => state.user.name
export const selectUserIsLoading = (state: RootState) => state.user.isLoading

export default userSlice.reducer

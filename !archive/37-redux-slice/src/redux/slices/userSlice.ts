import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

export interface UserState {
  name: string
}

const initialState: UserState = {
  name: 'John Doe'
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    }
  }
})

export const { setUsername } = userSlice.actions
export const selectUsername = (state: RootState) => state.user.name
export default userSlice.reducer

import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export interface UserState {
  name: string
  age: number
  email: string
}

const initialState: UserState = {
  name: 'John Doe',
  age: 30,
  email: 'john.doe@example.com'
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    },
    setAge: (state, action: PayloadAction<number>) => {
      state.age = action.payload
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload
    }
  }
})

export const { setUsername, setAge, setEmail } = userSlice.actions

export const selectUsername = (state: { user: UserState }) => state.user.name
export const selectAge = (state: { user: UserState }) => state.user.age
export const selectEmail = (state: { user: UserState }) => state.user.email

export default userSlice.reducer

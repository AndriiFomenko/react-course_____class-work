import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'
import counterReducer from './slices/counterSlice'
import { useDispatch } from 'react-redux'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export const useAppDispatch = () => useDispatch<AppDispatch>()

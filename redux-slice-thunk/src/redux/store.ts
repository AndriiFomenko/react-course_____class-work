import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import { logger } from './middleware'
import userReducer from './userSlice'
import { useDispatch } from 'react-redux'

const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer
  },
  middleware: (get) => get().concat(logger)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store

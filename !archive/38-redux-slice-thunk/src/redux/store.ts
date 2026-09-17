import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'
import counterReducer from './slices/counterSlice'
import { useDispatch } from 'react-redux'
import { logger } from '../middleware/middleware'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export const useAppDispatch = () => useDispatch<AppDispatch>()

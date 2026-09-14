import { configureStore } from '@reduxjs/toolkit'
import { counterReducer } from './reducers'

export const store = configureStore({
  reducer: {
    counter: counterReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat()
})

export type AppDispatch = typeof store.dispatch

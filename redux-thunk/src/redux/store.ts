import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducer'
import { logger } from './middleware'

const store = configureStore({
  reducer: {
    counter: counterReducer
  },
  middleware: (get) => get().concat(logger as any)
})

export default store

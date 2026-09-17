import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'
import counterReducer from './slices/counterSlice'
import { useDispatch } from 'react-redux'
import { logger } from '../middleware/middleware'
import createSagaMiddleware from 'redux-saga'
import counterSagas from './sagas/counterSagas'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware, logger)
})

sagaMiddleware.run(counterSagas)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export const useAppDispatch = () => useDispatch<AppDispatch>()

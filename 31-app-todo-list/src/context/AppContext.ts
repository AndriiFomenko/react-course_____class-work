import { createContext } from 'react'
import { initialState } from '../const/initialState'

export const AppContext = createContext<typeof initialState>(initialState)

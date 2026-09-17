import { createContext } from 'react'
import type { AppContextType } from '../types/app'
import { appContextDefaults } from '../constants/appDefaults'

export const AppContext = createContext<AppContextType>(appContextDefaults)

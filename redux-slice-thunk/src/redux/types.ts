import { type Action, type ThunkAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

export type AsyncCounterAction = ThunkAction<void, RootState, unknown, Action>

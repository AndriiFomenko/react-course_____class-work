import type { RootState } from './types'

export const selectCounter = (state: RootState): number => state.counter

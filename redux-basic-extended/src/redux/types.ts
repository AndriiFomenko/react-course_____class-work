import type store from './store'

export type CounterState = {
  count: number
}

export type RootState = ReturnType<typeof store.getState>

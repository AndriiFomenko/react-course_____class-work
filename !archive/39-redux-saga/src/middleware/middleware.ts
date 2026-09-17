import type { Middleware } from '@reduxjs/toolkit'
import type { RootState } from '../redux/store'

export const logger: Middleware = (store) => (next) => (action) => {
  const p = (store.getState() as RootState).counter
  const act = action as { type: string; payload?: unknown }
  console.log('%c prev state:', 'color: #8c8c8c', `count: ${p.count}, isLoading: ${p.isLoading}`)
  console.log('%c action / pending:', 'color: #faad14', `${act.type}${act.payload !== undefined ? `, payload: ${act.payload}` : ''}`)
  const result = next(action)
  const n = (store.getState() as RootState).counter
  console.log('%c next state:', 'color: #52c41a', `count: ${n.count}, isLoading: ${n.isLoading}`)
  return result
}

import type { ComponentType } from 'react'

export interface RouteInterface {
  path: string
  label?: string
  Component: ComponentType
  ErrorBoundary?: ComponentType
  isInNav?: boolean
}

import { type ReactNode } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from './ErrorFallback'

interface AppErrorBoudaryProps {
  children: ReactNode
}

const AppErrorBoudary = ({ children }: AppErrorBoudaryProps) => {
  return <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>
}

export default AppErrorBoudary

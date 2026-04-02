import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from './ErrorFallback'

interface AppErrorBoundaryProps {
  children: React.ReactNode
  onReset: () => void
}

const AppErrorBoundary = ({ children, onReset }: AppErrorBoundaryProps) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onReset={onReset}>
      {children}
    </ErrorBoundary>
  )
}

export default AppErrorBoundary

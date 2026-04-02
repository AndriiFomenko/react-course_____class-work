import type { FallbackProps } from 'react-error-boundary'

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  const errorMessage = error instanceof Error ? error.message : String(error)
  return (
    <div className="error-card" role="alert">
      <div className="error-icon">⚠️</div>
      <h2 className="error-title">Something went wrong</h2>
      <pre className="error-message">{errorMessage}</pre>
      <button className="error-button" onClick={resetErrorBoundary}>
        Create Magic (Try Again)
      </button>
    </div>
  )
}

export default ErrorFallback

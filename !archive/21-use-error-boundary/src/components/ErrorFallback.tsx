interface ErrorFallbackProps {
  error: Error
}

const ErrorFallback = ({ error }: ErrorFallbackProps) => {
  return (
    <div role="alert" style={{ color: 'red', padding: '1em', border: '1px solid red' }}>
      <p>⚠️ Something went wrong:</p>
      <pre>{error.message}</pre>
    </div>
  )
}

export default ErrorFallback

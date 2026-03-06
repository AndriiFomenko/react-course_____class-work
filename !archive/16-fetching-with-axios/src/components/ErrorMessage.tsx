interface ErrorMessageProps {
  message: string
}

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return <p style={{ fontSize: '40px', fontWeight: 'bold', color: 'red' }}>{message}</p>
}

export default ErrorMessage

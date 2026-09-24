interface SuccessMessageProps {
  successMessage: string
  errorMessage?: string
}

const SuccessMessage = ({ successMessage, errorMessage }: SuccessMessageProps) => {
  console.log('errorMessage', errorMessage)
  console.log('successMessage', successMessage)
  if (errorMessage) return null
  return <div className="success">{successMessage}</div>
}

export default SuccessMessage

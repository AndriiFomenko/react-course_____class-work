interface SuccessMessageProps {
  username: string
}

const SuccessMessage = ({ username }: SuccessMessageProps) => {
  return <p>{username} logged in successfully</p>
}

export default SuccessMessage

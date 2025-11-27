import { useFormStatus } from 'react-dom'

interface ButtonProps {
  children: React.ReactNode
  type?: 'submit' | 'button' | 'reset'
  loadingText?: string
}

const Button = ({ children, type = 'submit', loadingText }: ButtonProps) => {
  const { pending } = useFormStatus()

  return (
    <button type={type} disabled={pending}>
      {pending && loadingText ? loadingText : children}
    </button>
  )
}

export default Button

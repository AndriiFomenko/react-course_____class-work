import { type ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  onClick: () => void
  title: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}
const Button = ({
  children,
  type = 'button',
  disabled = false,
  ...props
}: ButtonProps) => {
  return (
    <button type={type} disabled={disabled} {...props}>
      {children}
    </button>
  )
}

export default Button

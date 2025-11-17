import { type ReactNode } from 'react'

interface ButtonProps {
  isDisabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  children: ReactNode
}

const Button = ({ isDisabled = false, type = 'button', children }: ButtonProps) => {
  return (
    <div>
      <h2>Disabled button status: {isDisabled ? 'Disabled' : 'Enabled'}</h2>
      <button type={type} disabled={isDisabled}>
        {children}
      </button>
    </div>
  )
}

export default Button

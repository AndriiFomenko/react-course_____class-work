import type { ReactNode } from 'react'

interface ButtonProps {
  onClick: () => void
  children: ReactNode
}

const Button = ({ onClick, children }: ButtonProps) => {
  return <button onClick={onClick}>{children}</button>
}

export default Button

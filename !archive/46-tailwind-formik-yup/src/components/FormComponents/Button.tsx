import type { ButtonHTMLAttributes, ReactNode } from 'react'

export type ButtonVariant = 'primary' | 'secondary' | 'outline'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  children: ReactNode
  className?: string
}

const Button = ({ variant = 'primary', children, className = '', ...rest }: ButtonProps) => {
  const baseStyles =
    'py-2.5 px-4 rounded-xl font-semibold transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none'

  const variants: Record<ButtonVariant, string> = {
    primary:
      'flex-1 bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-md hover:shadow-cyan-500/25 active:scale-[0.99]',
    secondary: 'bg-slate-700 hover:bg-slate-600 text-white',
    outline: 'border border-slate-700 hover:bg-slate-700/50 text-slate-300 font-medium'
  }

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </button>
  )
}

export default Button

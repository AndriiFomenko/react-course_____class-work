import { ErrorMessage, Field } from 'formik'
import TextError from './TextError'
import type { BaseFormControlProps } from '../../types'

export interface InputProps extends BaseFormControlProps {
  type?: string
  placeholder?: string
  autoComplete?: string
}

const Input = ({
  label,
  name,
  type = 'text',
  className = '',
  ...rest
}: InputProps) => {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-medium text-slate-300">
        {label}
      </label>
      <Field
        id={name}
        type={type}
        name={name}
        className={`w-full rounded-xl border border-slate-700 bg-slate-900/90 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 shadow-inner transition-all focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/80 ${className}`}
        {...rest}
      />
      <ErrorMessage component={TextError} name={name} />
    </div>
  )
}

export default Input

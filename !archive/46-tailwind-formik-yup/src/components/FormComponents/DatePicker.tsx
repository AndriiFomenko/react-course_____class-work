import { ErrorMessage, Field } from 'formik'
import TextError from './TextError'
import type { BaseFormControlProps } from '../../types'

export type DatePickerProps = BaseFormControlProps

const DatePicker = ({
  label,
  name,
  className = '',
  ...rest
}: DatePickerProps) => {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-medium text-slate-300">
        {label}
      </label>
      <Field
        type="date"
        id={name}
        name={name}
        className={`w-full cursor-pointer rounded-xl border border-slate-700 bg-slate-900/90 px-3.5 py-2.5 text-sm text-white shadow-inner transition-all [color-scheme:dark] focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/80 ${className}`}
        {...rest}
      />
      <ErrorMessage component={TextError} name={name} />
    </div>
  )
}

export default DatePicker

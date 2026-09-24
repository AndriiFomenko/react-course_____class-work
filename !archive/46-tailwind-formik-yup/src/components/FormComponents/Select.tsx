import { ErrorMessage, Field } from 'formik'
import TextError from './TextError'
import type {
  BaseFormControlProps,
  ControlOptionInterface
} from '../../types'

export type SelectOptionInterface = ControlOptionInterface

export interface SelectProps extends BaseFormControlProps {
  options: ControlOptionInterface[]
}

const Select = ({
  label,
  name,
  options,
  className = '',
  ...rest
}: SelectProps) => {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-medium text-slate-300">
        {label}
      </label>
      <div className="relative">
        <Field
          as="select"
          id={name}
          name={name}
          className={`w-full appearance-none rounded-xl border border-slate-700 bg-slate-900/90 px-3.5 py-2.5 pr-10 text-sm text-white shadow-inner transition-all focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/80 cursor-pointer ${className}`}
          {...rest}
        >
          {options.map((option) => (
            <option
              key={option.value || option.key}
              value={option.value}
              className="bg-slate-900 text-white"
            >
              {option.key}
            </option>
          ))}
        </Field>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3.5 text-slate-400">
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
      <ErrorMessage component={TextError} name={name} />
    </div>
  )
}

export default Select

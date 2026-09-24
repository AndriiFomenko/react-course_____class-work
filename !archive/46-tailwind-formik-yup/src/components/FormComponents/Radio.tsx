import { ErrorMessage, Field, type FieldProps } from 'formik'
import TextError from './TextError'
import type {
  BaseFormControlProps,
  ControlOptionInterface
} from '../../types'

export type RadioOptionInterface = ControlOptionInterface

export interface RadioProps extends BaseFormControlProps {
  options: ControlOptionInterface[]
}

const Radio = ({
  label,
  name,
  options,
  className = '',
  ...rest
}: RadioProps) => {
  return (
    <fieldset className="flex flex-col gap-1.5">
      <legend className="text-sm font-medium text-slate-300">{label}</legend>
      <div className={`flex flex-col gap-2.5 pt-1 ${className}`}>
        <Field name={name}>
          {({ field }: FieldProps) =>
            options.map((option) => {
              const isChecked = field.value === option.value
              return (
                <div
                  key={option.value || option.key}
                  className="flex items-center gap-2"
                >
                  <input
                    type="radio"
                    id={`${name}-${option.value}`}
                    {...field}
                    value={option.value}
                    checked={isChecked}
                    className="h-4 w-4 cursor-pointer border-slate-700 bg-slate-900 text-cyan-500 accent-cyan-500 focus:ring-2 focus:ring-cyan-500/80 focus:ring-offset-0"
                    {...rest}
                  />
                  <label
                    htmlFor={`${name}-${option.value}`}
                    className={`cursor-pointer select-none text-sm transition-colors ${
                      isChecked
                        ? 'font-medium text-white'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {option.key}
                  </label>
                </div>
              )
            })
          }
        </Field>
      </div>
      <ErrorMessage component={TextError} name={name} />
    </fieldset>
  )
}

export default Radio
